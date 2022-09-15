from rest_framework import serializers
from .models import SpecialOffers 

class OffersListSerializer(serializers.ModelSerializer):

    class Meta:
        model = SpecialOffers
        fields = ('id','url_image',"title",'description','created_at')