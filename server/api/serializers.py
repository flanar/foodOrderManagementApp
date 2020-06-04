from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Restaurant, UserInfo, Order

class RestauratSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('restaurant_id', 'restaurant_name', 'restaurant_votes')

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ('user_info_id', 'user_id', 'restaurant_id')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('order_id', 'user_id', 'order_receiver_id', 'order_food')

class UserSerializer(serializers.ModelSerializer):
    user_info = UserInfoSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'user_info')