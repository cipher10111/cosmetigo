from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    CheckResetTokenAPIView,
    LoginAPIView,
    ProfileAPIView,
    RegisterAPIView,
    ResetPasswordRequestAPI,
    SetNewPasswordAPIView,
    VerifyEmailAPIView
)

urlpatterns = [
    path('register', RegisterAPIView.as_view(), name='register'),
    path('verify-email', VerifyEmailAPIView.as_view(), name="verify-email"),
    path('login', LoginAPIView.as_view(), name="login"),
    path('profile', ProfileAPIView.as_view(), name="profile"),
    path('token/refresh', TokenRefreshView.as_view(), name='token-refresh'),
    path('reset-password-request', ResetPasswordRequestAPI.as_view(), name="reset-password-request"),
    path('reset-password-token-check/<uidb64>/<token>', CheckResetTokenAPIView.as_view(), name="reset-password-token-check"),
    path('reset-password-confirm', SetNewPasswordAPIView.as_view(), name="reset-password-confirm"),
]
