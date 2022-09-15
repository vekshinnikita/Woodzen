from rest_framework import serializers
from .models import Materials, Product, Types

class TypeListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Types
        fields = ("id", "title")

class ProductListSerializer(serializers.ModelSerializer):

    types = TypeListSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        fields = ("id", "title", 'url_image', 'types')



class MaterialListSerializer(serializers.ModelSerializer):

    product_title = serializers.CharField(source='type.product.title')
    type_title = serializers.CharField(source='type.title')

    class Meta:
        model = Materials
        fields = ("id","title", "url_image", 'price', 'product_title', 'type_title')


class TypeRetrieveSerializer(serializers.ModelSerializer):

    materials = MaterialListSerializer(read_only=True, many=True)
    product_title = serializers.CharField(source='product.title')

    class Meta:
        model = Types
        fields = ("id", "title", 'materials', 'product_title')
