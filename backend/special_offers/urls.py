from django.urls import path, include

from .views import OffersListView


urlpatterns = [
    path('offers/', OffersListView.as_view()),
]