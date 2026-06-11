from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VentaHistoricaViewSet, reporte_ventas_por_pais

router = DefaultRouter()
router.register(r'ventas', VentaHistoricaViewSet, basename='ventahistorica')

urlpatterns = [
    path('', include(router.urls)),
    path('reporte-ventas/', reporte_ventas_por_pais),
]