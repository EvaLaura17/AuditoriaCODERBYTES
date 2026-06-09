from rest_framework import viewsets
from .models import Distribuidor, SellOut
from .serializers import DistribuidorSerializer, SellOutSerializer

class DistribuidorViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite realizar operaciones CRUD sobre los distribuidores.
    """
    queryset = Distribuidor.objects.all().order_by('razon_social')
    serializer_class = DistribuidorSerializer
    
    # Filtros útiles para buscar distribuidores por país o canal
    filterset_fields = {
        'pais': ['exact'],
        'canal': ['exact'],
        'activo': ['exact'],
        'razon_social': ['icontains'],
    }


class SellOutViewSet(viewsets.ModelViewSet):
    """
    API endpoint para la gestión y auditoría de los datos históricos de Sell-Out.
    """
    queryset = SellOut.objects.all().order_by('-fecha')
    serializer_class = SellOutSerializer
    
    # Habilita filtros exactos y por rangos temporales para auditorías comerciales o IA
    filterset_fields = {
        'distribuidor': ['exact'],
        'producto': ['exact'],
        'anio': ['exact', 'gte', 'lte'],
        'mes': ['exact'],
        'semana_iso': ['exact'],
        'canal_venta': ['exact'],
    }