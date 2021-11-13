from django.urls import path, include

from .views import (
  RegisterAPIView, 
  VerifyEmailAPIView
)

urlpatterns = [
  path('register', RegisterAPIView.as_view(), name='register'),
  path('verify-email', VerifyEmailAPIView.as_view(), name="verify-email"),
]
