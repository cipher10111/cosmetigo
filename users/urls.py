from django.urls import path, include
from .views import RegisterView, LoginView, UserView, VerifyEmailView
from knox import views as knox_views

urlpatterns = [
    path('', include('knox.urls')),
    path('register', RegisterView.as_view(), name="register"),
    path('email-verify', VerifyEmailView.as_view(), name="email-verify"),
    path('login', LoginView.as_view(), name="login"),
    path('profile', UserView.as_view()),
    path('logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
