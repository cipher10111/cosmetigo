from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed, ValidationError

from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'username',
                  'password', 'first_name', 'last_name']

    def validate(self, user_data):
        username = user_data.get('username', '')

        if not username.isalnum():
            raise ValidationError({
                "username": "The username should contains only alphanumeric characters"
            })

        return user_data

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class EmailVerificationSerializer(serializers.ModelSerializer):
    # token = serializers.CharField(max_length=600)
    email = serializers.EmailField(min_length=3)

    class Meta:
        model = User
        fields = ["email"]


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=3, max_length=255)
    username = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    password = serializers.CharField(
        max_length=128, min_length=6, write_only=True)
    tokens = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'tokens']

    def get_tokens(self, data):
        user = User.objects.get(email=data['email'])

        return {
            "refresh": user.tokens()['refresh'],
            "access": user.tokens()['access'],
        }

    def validate(self, data):
        email = data.get("email", "")
        password = data.get("password", "")

        user = authenticate(email=email, password=password)

        if not user:
            raise AuthenticationFailed({
                "error": "Invalid credentials."
            })
        if not user.is_active:
            raise AuthenticationFailed({
                "error": "Account blocked. Contact support."
            })
        if not user.is_verified:
            raise AuthenticationFailed({
                "error": "Please verify your email first"
            })

        return {
            "email": user.email,
            "username": user.username,
            "tokens": user.tokens
        }


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ['tokens', 'is_active', 'is_staff', 'is_superuser', 'last_login',
                            'created_at', 'updated_at', 'groups', 'user_permissions', 'is_verified', 'is_mobile_verified']

        def update(self, user, validated_data):
            password = validated_data.pop("password", None)
            mobile = validated_data.get("mobile", None)
            
            if mobile and mobile != user.mobile and user.is_mobile_verified:
                setattr(user, "is_mobile_verified", False)
            
            for (key, value) in validated_data.items():
                setattr(user, key, value)

            if password:
                user.set_password(password)
            user.save()
            return user
