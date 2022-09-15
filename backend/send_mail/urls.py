from django.urls import path

from .views import SendOrder

urlpatterns = [
    path('makeorder/', SendOrder.as_view())
]