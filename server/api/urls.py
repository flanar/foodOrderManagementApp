from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'restaurant', views.RestaurantViewSet)
router.register(r'user_info', views.UserInfoViewSet)
router.register(r'order', views.OrderViewSet)

urlpatterns = [
    path('hello/', views.HelloView.as_view(), name='hello'),
    path('', views.index, name='index,'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]