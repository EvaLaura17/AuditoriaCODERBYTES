from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from .models import PaisDestino
from .serializers import PaisDestinoSerializer

class PaisDestinoViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite gestionar el catálogo global de Países de Destino.
    """
    queryset = PaisDestino.objects.all().order_by('nombre')
    serializer_class = PaisDestinoSerializer
    
    # Habilita filtros exactos por parámetros de la URL (Ej: ?activo=true&region=Sudamerica)
    filterset_fields = ['activo', 'region', 'codigo_iso2', 'codigo_iso3', 'moneda_codigo']
    
    # Habilita búsquedas por texto parcial (Ej: /api/v1/geografico/?search=boliv)
    filter_backends = [SearchFilter]
    search_fields = ['nombre', 'nombre_en', 'acuerdo_comercial']