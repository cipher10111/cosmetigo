from django.core.mail import EmailMessage

class Utils:
    @staticmethod
    def send_mail(data):
        email = EmailMessage(subject=data['subject'], body=data['body'], to=[data['to']], from_email='Cosmetigo <do_not_reply@domain.com>')
        email.send()
