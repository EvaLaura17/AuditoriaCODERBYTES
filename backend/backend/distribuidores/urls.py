from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DistribuidorViewSet, SellOutViewSet

router = DefaultRouter()
router.register(r'agentes', DistribuidorViewSet, basename='distribuidor')
router.register(r'historico-ventas', SellOutViewSet, basename='sellout')

urlpatterns = [
    path('', include(router.urls)),
]