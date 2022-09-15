from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView

from .service import PaginationNews
from .models import News, Subscribers
from .serializers import NewsSerializers, SubscriberSerializers

# Create your views here.

class SubscribeAPIView(CreateAPIView):

    queryset = Subscribers.objects.all()
    serializer_class = SubscriberSerializers


class NewsListView(ListAPIView):

    pagination_class = PaginationNews

    queryset = News.objects.filter(draft=False).order_by('-created_at')
    serializer_class = NewsSerializers

