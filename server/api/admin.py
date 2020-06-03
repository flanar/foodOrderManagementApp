from django.contrib import admin
from .models import Restaurant, User, Order

@admin.register(Restaurant)
class Restaurant (admin.ModelAdmin):
    pass

@admin.register(User)
class User (admin.ModelAdmin):
    pass

@admin.register(Order)
class Order (admin.ModelAdmin):
    pass
