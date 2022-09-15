from django.urls import path, include

from .views import ProductListView, TypeRetrieveView


urlpatterns = [
    path('', ProductListView.as_view()),
    path('types/<int:pk>/', TypeRetrieveView.as_view())
]