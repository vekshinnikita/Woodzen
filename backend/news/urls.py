from django.urls import path, include

from .views import NewsListView, SubscribeAPIView



urlpatterns = [
    path('news/', NewsListView.as_view()),
    path('subscribe/', SubscribeAPIView.as_view()),
]