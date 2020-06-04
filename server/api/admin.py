from django.contrib import admin
from .models import Restaurant, UserInfo, Order

@admin.register(Restaurant)
class Restaurant (admin.ModelAdmin):
    pass

@admin.register(UserInfo)
class UserInfo (admin.ModelAdmin):
    pass

@admin.register(Order)
class Order (admin.ModelAdmin):
    pass
