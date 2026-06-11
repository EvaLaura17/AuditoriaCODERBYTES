from rest_framework import viewsets
from .models import Exportacion, ItemExportacion, DocumentoAduanero
from .serializers import ExportacionSerializer, ItemExportacionSerializer, DocumentoAduaneroSerializer

class ExportacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint central para la administración y control de operaciones de Exportación.
    Soporta operaciones atómicas de guardado anidado con ítems.
    """
    queryset = Exportacion.objects.all().prefetch_related('items', 'documentos').order_by('-fecha_embarque')
    serializer_class = ExportacionSerializer
    
    # Habilitamos filtros para control de auditoría logística
    filterset_fields = {
        'empresa': ['exact'],
        'pais_destino': ['exact'],
        'estado': ['exact'],
        'via_transporte': ['exact'],
        'fecha_embarque': ['exact', 'gte', 'lte'],
    }


class ItemExportacionViewSet(viewsets.ModelViewSet):
    queryset = ItemExportacion.objects.all()
    serializer_class = ItemExportacionSerializer
    filterset_fields = ['exportacion', 'producto']


class DocumentoAduaneroViewSet(viewsets.ModelViewSet):
    queryset = DocumentoAduanero.objects.all()
    serializer_class = DocumentoAduaneroSerializer
    filterset_fields = ['exportacion', 'estado', 'tipo_documento']