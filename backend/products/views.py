from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView


from .service import PaginationProduct

from .models import Product, Types
from .serializers import ProductListSerializer, TypeRetrieveSerializer

# Create your views here.

class ProductListView(ListAPIView):

    # filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    # filterset_class = ProductFilter
    # ordering_fields = ('price',)
    pagination_class = PaginationProduct
    # search_fields = ['title','description']

    queryset = Product.objects.filter(draft=False)
    serializer_class = ProductListSerializer


class TypeRetrieveView(RetrieveAPIView):

    queryset = Types.objects.all()
    serializer_class = TypeRetrieveSerializer