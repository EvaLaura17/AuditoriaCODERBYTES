from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VentaHistoricaViewSet, reporte_ventas_por_pais

# 1. Router para el ViewSet de VentaHistorica (genera las rutas: list, create, retrieve, update, delete)
router = DefaultRouter()
router.register(r'ventas', VentaHistoricaViewSet, basename='ventahistorica')

urlpatterns = [
    # 2. Rutas de la API (ej: /api/ventas/)
    path('api/', include(router.urls)),
    
    # 3. Ruta de la vista del reporte (ej: /reporte-ventas/)
    path('reporte-ventas/', reporte_ventas_por_pais, name='reporte_ventas'),
]