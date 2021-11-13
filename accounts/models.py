from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager
)
from django.utils.translation import ugettext_lazy as _
from rest_framework_simplejwt.tokens import RefreshToken

# Create your models here.


class Manager(BaseUserManager):
    def create_user(self, email, username, password, first_name, last_name, **other_fields):
        if not email:
            raise ValueError(_("A valid email address must be provided"))
        if not username:
            raise ValueError(_("A valid username must be provided"))

        email = self.normalize_email(email)
        new_user = self.model(email=email, username=username,
                              first_name=first_name, last_name=last_name, **other_fields)
        new_user.set_password(password)
        new_user.save()
        return new_user

    def create_superuser(self, email, username, password, first_name, last_name, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        
        return self.create_user(email, username, password, first_name, last_name, **other_fields)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name=_(
        'email address'), unique=True, max_length=255, db_index=True)
    username = models.CharField(max_length=150, unique=True, db_index=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    mobile = models.CharField(max_length=10)
    is_mobile_verified = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    objects = Manager()

    def __str__(self):
        return self.email
    
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }