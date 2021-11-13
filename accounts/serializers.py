from django.contrib.auth import authenticate
from django.db.models import fields
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed, ValidationError

from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(min_length=6, write_only=True)

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
    username = serializers.CharField(max_length=255, min_length=3, read_only=True)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
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