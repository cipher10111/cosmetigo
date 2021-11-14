from django.conf import settings
from django.contrib.auth.models import Permission
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.utils.encoding import DjangoUnicodeDecodeError, smart_bytes, smart_str
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
import jwt
from rest_framework import (
    generics,
    permissions,
    status
)
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework_simplejwt.tokens import RefreshToken

from .utils import Utils
from .models import User
from .serializers import (
    EmailVerificationSerializer,
    LoginSerializer,
    RegisterSerializer,
    ResetPasswordRequestSerializer,
    SetNewPasswordSerializer,
    UserSerializer
)

# Create your views here.


class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user_data = serializer.data
        user = User.objects.get(email=user_data['email'])

        token = RefreshToken.for_user(user).access_token
        protocol = "https://" if request.is_secure() else "http://"
        current_site = get_current_site(request).domain

        redirect_url = protocol + \
            str(current_site) + reverse("verify-email") + "?token=" + str(token)

        data = {
            "to": user.email,
            "body": "Hi " + user.username + " Use link below to verify your email\n" + redirect_url,
            "subject": "Verify your email"
        }

        Utils.send_mail(data)

        return Response({"message": "Registration completed successfully. Please verify your account"}, status=status.HTTP_201_CREATED)


class VerifyEmailAPIView(generics.GenericAPIView):
    serializer_class = EmailVerificationSerializer

    def get(self, request):
        token = request.GET.get("token")
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, "HS256")
            user = User.objects.get(id=payload['user_id'])

            if not user.is_verified:
                user.is_verified = True
                user.save()

            return Response({'email': 'Successfully verified email'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Activation link expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = request.data['email']
        user = User.objects.get(email=email)

        if user and not user.is_active:
            return Response({"Account deactivated. please contact support"}, status=status.HTTP_403_FORBIDDEN)

        if user and not user.is_verified:
            token = RefreshToken.for_user(user).access_token
            protocol = "https://" if request.is_secure() else "http://"
            current_site = get_current_site(request).domain

            redirect_url = protocol + \
                str(current_site) + reverse("verify-email") + \
                "?token=" + str(token)
            body = "Hi " + user.username + \
                " Use the link below to verify your email\n" + redirect_url

            data = {
                'to': user.email,
                'body': body,
                'subject': "Verify your email"
            }
            Utils.send_mail(data)

        return Response({"message": "Account activation link has been sent to " + email + ". Please verify your account"}, status=status.HTTP_200_OK)


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class ProfileAPIView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)


class ResetPasswordRequestAPI(generics.GenericAPIView):
    serializer_class = ResetPasswordRequestSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get("email", None)

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)

            protocol = "https://" if request.is_secure() else "http://"
            current_site = get_current_site(request).domain

            redirect_url = protocol + \
                str(current_site) + reverse('reset-password-token-check', kwargs={'uidb64': uidb64, 'token': token}) + "?token=" + str(token)

            data = {
                "to": user.email,
                "body": "Hi " + user.username + " Use link below to reset your password\n" + redirect_url,
                "subject": "Reset your passsword"
            }

            try:
                Utils.send_mail(data)
            except Exception:
                return Response({'error': "Something went wrong..."}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)


class CheckResetTokenAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):
        try:
            user_id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=user_id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({"error": "Invalid token, please generate a new one"})

            return Response({"success": True, "message": "Token matched", "uidb64": uidb64, "token": token}, status=status.HTTP_200_OK)
        except DjangoUnicodeDecodeError:
            return Response({"error": "Invalid token, please generate a new one"}, status=status.HTTP_400_BAD_REQUEST)


class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer
    
    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password has been reset'}, status=status.HTTP_200_OK)
