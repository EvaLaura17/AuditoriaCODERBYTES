from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from .models import EmpresaExportadora
from .serializers import EmpresaExportadoraSerializer

class EmpresaExportadoraViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite realizar operaciones CRUD sobre las Empresas Exportadoras.
    """
    queryset = EmpresaExportadora.objects.all().order_by('razon_social')
    serializer_class = EmpresaExportadoraSerializer
    
    # Habilitamos filtros exactos mediante parámetros URL
    filterset_fields = ['activo', 'pais_origen', 'ruc_nit']
    
    # Habilitamos búsquedas parciales (Ej: /api/v1/empresas/?search=corporacion)
    filter_backends = [SearchFilter]
    search_fields = ['razon_social', 'representante', 'email']