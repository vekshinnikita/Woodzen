from rest_framework import serializers

from .models import News, Subscribers




class SubscriberSerializers(serializers.ModelSerializer):

    class Meta:
        model = Subscribers
        fields = "__all__"

class NewsSerializers(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = ('id','url_image',"title",'prescription','description','created_at' )

class CreateNewsSerializers(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = ('id','url_image',"title",'prescription','description','created_at','mailing','draft')
