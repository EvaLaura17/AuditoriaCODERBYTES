from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework import viewsets, serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

router = DefaultRouter()
router.register(r'', ProductoViewSet, basename='producto')

urlpatterns = [
    path('', include(router.urls)),
]