from django.db import models
from django.contrib.auth.models import User

class Restaurant(models.Model):
    restaurant_id = models.AutoField(primary_key=True)
    restaurant_name = models.CharField(max_length=255)
    restaurant_votes = models.IntegerField(default=0)

    def __str__(self):
        return self.restaurant_name

class UserInfo(models.Model):
    user_info_id = models.AutoField(primary_key=True)
    user_id = models.OneToOneField(User, related_name='user_info', on_delete=models.CASCADE)
    restaurant_id = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    order_receiver_id = models.IntegerField(default=None)
    order_food = models.CharField(max_length=1024)
