from django.urls import path, include
from .views import PasswordTokenCheckAPI, RegisterView, LoginView, RequestPasswordResetEmail, SetNewPasswordAPIView, UserRetrieveUpdateAPIView, VerifyEmailView

urlpatterns = [
    path('register', RegisterView.as_view(), name="register"),
    path('email-verify', VerifyEmailView.as_view(), name="email-verify"),
    path('login', LoginView.as_view(), name="login"),
    path('user', UserRetrieveUpdateAPIView.as_view(), name="user"),
    # path('token/refresh', PasswordTokenCheckAPI.as_view(), name="password-refresh/"),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(), name="password-reset-confirm"),
    path('password-reset/<uidb64>/<token>/', PasswordTokenCheckAPI.as_view(), name="password-reset-confirm"),
    path('password-reset-complete', SetNewPasswordAPIView.as_view(),name='password-reset-complete')
]
