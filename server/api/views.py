from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Restaurant, User, Order
from api.serializers import RestauratSerializer, UserSerializer, OrderSerializer

def index(request):
    return HttpResponse('Hello from api.')

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestauratSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer