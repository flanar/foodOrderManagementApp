from django.db import models

class Restaurant(models.Model):
    restaurant_id = models.AutoField(primary_key=True)
    restaurant_name = models.CharField(max_length=255)
    restaurant_votes = models.IntegerField(default=0)

    def __str__(self):
        return self.restaurant_name

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=255)
    restaurant_id = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return self.user_name
    

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    order_receiver_id = models.IntegerField(default=None)
    order_food = models.CharField(max_length=1024)
