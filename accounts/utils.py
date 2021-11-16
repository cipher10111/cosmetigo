from django.contrib.auth import authenticate
from django.core.mail import EmailMessage
from google.auth.transport import requests
from google.oauth2 import id_token
import os, random

from .models import User


class Utils:
    @staticmethod
    def send_mail(data):
        email = EmailMessage(subject=data['subject'], body=data['body'], to=[
                             data['to']], from_email='Cosmetigo <info.cipher.dev@gmail.com>')
        email.send()

    @staticmethod
    def validate_google_auth_token(token):
        try:
            data = id_token.verify_oauth2_token(token, requests.Request())
            if 'accounts.google.com' in data['iss']:
                return data
        except Exception:
            return "Invalid token"

    def generate_username(self, name):

        username = "".join(name.split(' ')).lower()
        if not User.objects.filter(username=username).exists():
            return username
        else:
            random_username = username + str(random.randint(0, 1000))
            return self.generate_username(random_username)

    def register_user(self, provider, user_id, email, name):
        old_user = User.objects.filter(email=email)

        if old_user.exists():
            if provider == old_user[0].auth_provider:
                user = authenticate(
                    email=email, password=os.environ.get("SOCIAL_SCRET"))

                return{
                    "username": user.username,
                    "email": user.email,
                    "tokens": user.tokens()
                }
        else:
            new_user = {
                "username": self.generate_username(name),
                "email": email,
                "password": os.environ.get("SOCIAL_AUTH_SECRET")
            }
            new_user.is_verified = True
            new_user.auth_provider = provider
            new_user.save()

            user = authenticate(
                email=email, password=os.environ.get('SOCIAL_AUTH_SECRET'))
            return {
                'email': user.email,
                'username': user.username,
                'tokens': user.tokens()
            }
