from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from rest_framework_simplejwt.tokens import RefreshToken


class CustomAccountManager(BaseUserManager):
    def create_user(self, email, username, first_name, last_name, password, mobile, **other_fields):
        if not email:
            raise ValueError(_("Email address is required"))
        if not mobile:
            raise ValueError(_("Mobile address is required"))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username,
                          first_name=first_name, last_name=last_name, mobile=mobile, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, first_name, last_name, password, mobile, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(_("Superuser must be assigned to is_staff=True"))
        if other_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True")

        return self.create_user(email, username, first_name, last_name, password, mobile, **other_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=150, unique=True)
    mobile = models.CharField(max_length=10, unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    is_verified = models.BooleanField(default=False)
    is_mobile_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name', 'mobile']

    def __str__(self):
        return self.username

    def token(self):
        refresh_token = RefreshToken.for_user(self)
        return {
            'refresh_token': str(refresh_token),
            'access_token': str(refresh_token.access_token)
        }
