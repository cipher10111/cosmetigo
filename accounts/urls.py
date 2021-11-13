from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    LoginAPIView,
    ProfileAPIView,
    RegisterAPIView,
    VerifyEmailAPIView
)

urlpatterns = [
    path('register', RegisterAPIView.as_view(), name='register'),
    path('verify-email', VerifyEmailAPIView.as_view(), name="verify-email"),
    path('login', LoginAPIView.as_view(), name="login"),
    path('profile', ProfileAPIView.as_view(), name="profile"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
