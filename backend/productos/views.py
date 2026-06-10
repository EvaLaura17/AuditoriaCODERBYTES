from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from .models import Producto
from .serializers import ProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    """
    API endpoint para la gestión integral del catálogo de productos y SKUs de exportación.
    """
    queryset = Producto.objects.all().order_by('codigo_interno')
    serializer_class = ProductoSerializer
    
    # Filtros exactos para búsquedas estructuradas y automatizaciones
    filterset_fields = {
        'empresa': ['exact'],
        'codigo_hs': ['exact', 'startswith'],
        'categoria': ['exact'],
        'activo': ['exact'],
        'es_producto_controlado': ['exact'],
        'requiere_cert_origen': ['exact'],
        'requiere_cert_sanitario': ['exact'],
    }
    
    # Filtro por texto parcial (Ej: /api/v1/productos/?search=cafe)
    filter_backends = [SearchFilter]
    search_fields = ['nombre', 'descripcion', 'codigo_interno']