from django.dispatch import receiver
from django.db.models.signals import post_save

from .tasks import send_maling_to_subscribers

from news.models import News
from news.serializers import NewsSerializers

@receiver(post_save, sender=News)
def MailingNews(created, **kwargs):

    instance = kwargs.get('instance', None)

    if created:
        if instance.mailing:
            data = NewsSerializers(instance).data
            send_maling_to_subscribers.delay(data)
