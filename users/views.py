from drf_yasg import openapi
from rest_framework import generics, permissions, views, status
from rest_framework.response import Response
from django.contrib.sites.shortcuts import get_current_site
from knox.models import AuthToken
from django.urls import reverse

from .utils import Util
from .serializers import EmailVerificationSerializer, UserSerializer, RegisterSerializer, LoginSerializer
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
import jwt
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

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
        'token', in_ = openapi.IN_QUERY, description='Description', type=openapi.TYPE_STRING
    )

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request):
        token = request.GET.get('token')
        print(token)
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, "HS256")
            print(payload)
            user = User.objects.get(id=payload['user_id'])
            
            if not user.is_verified:
                user.is_verified = True
                user.save()

            return Response({'email': 'Successfully verified email'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Activation link expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as err:
            print(err)
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response({"userInfo": serializer.data}, status=status.HTTP_200_OK)


class UserView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
