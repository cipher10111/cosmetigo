from django.utils.encoding import force_str
from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128,
        min_length=6,
        write_only=True
    )

    class Meta:
        model = User
        fields = "__all__"
        read_only_fields = ('token', 'is_active', 'is_staff', 'is_superuser',
                            'last_login', 'is_mobile_active', 'created_at', 'updated_at')

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        for (key, value) in validated_data.items():
            setattr(instance, key, value)

        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128, min_length=6, write_only=True)
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


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)
    username = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    tokens = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['email', 'password', 'username', 'tokens']

    def get_tokens(self, obj):
        user = User.objects.get(email=obj['email'])

        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }

    def validate(self, data):
        email = data.get('email', '')
        password = data.get('password', '')

        if email is None:
            raise serializers.ValidationError(
                'An email address is required to log in.'
            )
        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

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


# class LogoutSerializer(serializers.Serializer):
#     refresh = serializers.CharField()

#     default_error_message = {
#         'bad_token': ('Token is expired or invalid')
#     }

#     def validate(self, data):
#         print("\n" + str(data['refresh']))
#         self.token = data['refresh']
#         return data

#     def save(self, **kwargs):
#         try:
#             RefreshToken(self.token).blacklist()

#         except TokenError:
#             self.fail('bad_token')

class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=3)

    redirect_url = serializers.CharField(max_length=500, required=False)

    class Meta:
        fields = ['email']


class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, max_length=68, write_only=True)
    token = serializers.CharField(
        min_length=1, write_only=True)
    uidb64 = serializers.CharField(
        min_length=1, write_only=True)

    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            user_id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=user_id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)
