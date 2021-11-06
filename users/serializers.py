from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        extra_kwargs = {'password': {'write_only': True}}
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)
    mobile = serializers.CharField(max_length=10, min_length=10)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name',
                  'last_name', 'password', 'mobile')

    def validate(self, attrs):
        username = attrs.get('username', '')

        if not username.isalnum():
            raise serializers.ValidationError({
                'username': 'The username should contain only aplhanumeric characters'
            })

        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=600)

    class Meta:
        model = User
        fields = ['token']


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(max_length=68, min_length=6)
    username = serializers.CharField(max_length=255, min_length=3, read_only=True)
    tokens = serializers.CharField(max_length=600, read_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'tokens']

    def validate(self, data):
        email = data.get('email', '')
        password = data.get('password', '')
        user = authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed('Invlaid Credentials')
        if not user.is_active:
            raise AuthenticationFailed('Account blocked. Contact support')
        if not user.is_verified:
            raise AuthenticationFailed('Please verify your email first')
        
        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens
        }