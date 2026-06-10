from rest_framework import viewsets
from .models import ProyeccionDemanda, AlertaStock
from .serializers import ProyeccionDemandaSerializer, AlertaStockSerializer

class ProyeccionDemandaViewSet(viewsets.ModelViewSet):
    """
    API endpoint para interactuar con los resultados predictivos del Motor de IA (ARIMA/Prophet).
    """
    queryset = ProyeccionDemanda.objects.all().order_by('-fecha_proyeccion')
    serializer_class = ProyeccionDemandaSerializer
    
    # Filtros avanzados para aislar corridas del modelo o consultar horizontes
    filterset_fields = {
        'producto': ['exact'],
        'distribuidor': ['exact'],
        'modelo_utilizado': ['exact'],
        'version_modelo': ['exact'],
        'fecha_proyeccion': ['exact', 'gte', 'lte'],
        'vigente': ['exact']
    }


class AlertaStockViewSet(viewsets.ModelViewSet):
    """
    API endpoint para auditar y gestionar las alertas por quiebre de stock estimadas por la IA.
    """
    queryset = AlertaStock.objects.all().order_by('-fecha_alerta')
    serializer_class = AlertaStockSerializer
    
    # Filtros clave para salas de control operativo logístico
    filterset_fields = {
        'producto': ['exact'],
        'distribuidor': ['exact'],
        'nivel_criticidad': ['exact'],
        'estado': ['exact'],
        'usuario_asignado': ['exact'],
        'fecha_quiebre_estimado': ['exact', 'gte', 'lte']
    }