from rest_framework import serializers
from .models import Restaurant, User, Order

class RestauratSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('restaurant_id', 'restaurant_name', 'restaurant_votes')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'user_name', 'restaurant_id')

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('order_id', 'user_id', 'order_receiver_id', 'order_food')