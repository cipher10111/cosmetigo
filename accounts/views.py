from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from rest_framework import (
    generics,
    views,
    status
)
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .utils import Utils
from .models import User
from .serializers import (
    EmailVerificationSerializer,
    RegisterSerializer
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


class VerifyEmailAPIView(views.APIView):
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
        email = request.data['email']
        user = User.objects.get(email=email)
        
        if user and not user.is_active:
             return Response({"Account deactivated. please contact support"}, status=status.HTTP_403_FORBIDDEN)

        if user and not user.is_verified:
            token = RefreshToken.for_user(user).access_token
            protocol = "https://" if request.is_secure() else "http://"
            current_site = get_current_site(request).domain

            redirect_url = protocol + \
                str(current_site) + reverse("verify-email") + "?token=" + str(token)
            body = "Hi " + user.username + \
                " Use the link below to verify your email\n" + redirect_url

            data = {
                'to': user.email,
                'body': body,
                'subject': "Verify your email"
            }
            Utils.send_mail(data)
            
        return Response({"message": "Account activation link has been sent to " + email + ". Please verify your account"}, status=status.HTTP_200_OK)
