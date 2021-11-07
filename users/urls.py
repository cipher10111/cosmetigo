from django.urls import path, include
from .views import RegisterView, LoginView, UserRetrieveUpdateAPIView, VerifyEmailView

urlpatterns = [
    path('register', RegisterView.as_view(), name="register"),
    path('email-verify', VerifyEmailView.as_view(), name="email-verify"),
    path('login', LoginView.as_view(), name="login"),
    path('user', UserRetrieveUpdateAPIView.as_view(), name="user"),
    # path('logout', LogoutView.as_view(), name='logout')
]
