from email import message
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from news.models import Subscribers
from backend.settings import RECIPIENT_EMAIL


def send(dict):

    html_message = render_to_string('order.html', dict)
    plain_message = strip_tags(html_message)

    send_mail(
        'ЗАКАЗ',
        plain_message,
        'SUPPORT',
        recipient_list=[RECIPIENT_EMAIL],
        fail_silently=False,
        html_message=html_message
    )

def send_mailing(data):

    html_message = render_to_string('mailing.html', {'instance': data})
    plain_message = strip_tags(html_message)

    recipients = list(Subscribers.objects.all().values('email'))

    recipients = [item['email'] for item in recipients]
               
    send_mail(
        data['title'],
        plain_message,
        'SUPPORT',
        recipient_list=recipients,
        fail_silently=False,
        html_message=html_message
    )