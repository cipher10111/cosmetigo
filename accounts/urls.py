from django.urls import path, include

from .views import (
  LoginAPIView,
  RegisterAPIView,
  VerifyEmailAPIView
)

urlpatterns = [
  path('register', RegisterAPIView.as_view(), name='register'),
  path('verify-email', VerifyEmailAPIView.as_view(), name="verify-email"),
  path('login', LoginAPIView.as_view(), name="login"),
]
