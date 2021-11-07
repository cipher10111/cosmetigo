from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.http.response import HttpResponsePermanentRedirect
from django.utils.encoding import smart_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from drf_yasg import openapi
from rest_framework import generics, permissions, views, status
from rest_framework.response import Response
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .renderer import UserJSONRenderer
from .permissions import IsOwner
from .utils import Util
from .serializers import EmailVerificationSerializer, ResetPasswordEmailRequestSerializer, SetNewPasswordSerializer, UserSerializer, RegisterSerializer, LoginSerializer
from .models import User
import jwt
import os


class CustomRedirect(HttpResponsePermanentRedirect):
    allowed_schemes = [os.environ.get('APP_SCHEME'), 'http', 'https']


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    renderer_classes = (UserJSONRenderer,)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        user = User.objects.get(email=user_data['email'])
        token = RefreshToken.for_user(user).access_token
        domain = get_current_site(request).domain
        abs_url = "http://" + domain + \
            reverse('email-verify') + "?token=" + str(token)

        body = "Hi " + user.username + " Use the link below to verify your email\n" + abs_url
        data = {
            'to': user.email,
            'body': body,
            'subject': 'Verify your email'
        }

        Util.send_email(data)
        return Response(user_data, status=status.HTTP_201_CREATED)


class VerifyEmailView(views.APIView):
    serializer_class = EmailVerificationSerializer

    token_param_config = openapi.Parameter(
        'token', in_=openapi.IN_QUERY, description='Description', type=openapi.TYPE_STRING
    )

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, "HS256")
            user = User.objects.get(id=payload['user_id'])

            if not user.is_verified:
                user.is_verified = True
                user.save()

            return Response({'email': 'Successfully verified email'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Activation link expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as err:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    renderer_classes = (UserJSONRenderer,)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class UserRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    permissions = (permissions.IsAuthenticated,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        # serializer_data = request.data.get('user', {})
        serializer = self.serializer_class(
            request.user, data=request.data, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

# class LogoutView(generics.GenericAPIView):
#     serializer_class = LogoutSerializer

#     permission_classes = (permissions.IsAuthenticated,)

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)

#         print("\n\nhi" + str(serializer) +"\n\n")

#         serializer.is_valid(raise_exception=True)
#         serializer.save()

#         return Response(status=status.HTTP_204_NO_CONTENT)


class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):

        redirect_url = request.GET.get('redirect_url')

        try:
            uid = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=uid)

            # if not PasswordResetTokenGenerator().check_token(user, token):
            #     if len(redirect_url) > 3:
            #         return CustomRedirect(redirect_url+"?token_valid=False")
            #     else:
            #         return CustomRedirect(os.environ.get('FRONTEND_URL', '')+"?token_valid=False")

            # if redirect_url and len(redirect_url) > 3:
                # return CustomRedirect(redirect_url+'?token_valid=True&message=Credentials Valid&uidb64='+uidb64+'&token='+token)
            return Response({'success':True, 'message': "Credential valid", 'uidb64': uidb64, 'token': token}, status=status.HTTP_200_OK)
            # else:
            #     return CustomRedirect(os.environ.get('FRONTEND_URL', '')+'?token_valid=False')

        except DjangoUnicodeDecodeError:
            try:
                if not PasswordResetTokenGenerator().check_token(user, token):
                    return CustomRedirect(redirect_url+'?token_valid=False')

            except UnboundLocalError:
                return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_400_BAD_REQUEST)


class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        email = request.data.get('email', '')

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            domain = get_current_site(
                request=request).domain
            relative_link = reverse('password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

            redirect_url = request.data.get('redirect_url', '')
            absurl = 'http://'+domain + relative_link
            body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl+"?redirect_url="+redirect_url
            data = {'body': body, 'to': user.email,
                    'subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)
