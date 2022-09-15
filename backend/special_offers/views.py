from django.shortcuts import render
from rest_framework.generics import ListAPIView

from .service import PaginationOffers
from .serializers import OffersListSerializer
from .models import SpecialOffers

# Create your views here.
class OffersListView(ListAPIView):

    pagination_class = PaginationOffers

    queryset = SpecialOffers.objects.filter(draft=False).order_by('-created_at')
    serializer_class = OffersListSerializer