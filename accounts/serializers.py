from rest_framework import serializers
from rest_framework.exceptions import ValidationError

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

class EmailVerificationSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=600)
    class Meta:
        fields = ["token"]