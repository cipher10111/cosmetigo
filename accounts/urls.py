from django.urls import path, include

from .views import (
  RegisterAPIView,
  # ResendVerifyEmailAPIView, 
  VerifyEmailAPIView
)

urlpatterns = [
  path('register', RegisterAPIView.as_view(), name='register'),
  path('verify-email', VerifyEmailAPIView.as_view(), name="verify-email"),
  # path('resend-verify-email', ResendVerifyEmailAPIView.as_view(), name="resend-verify-email"),
]
