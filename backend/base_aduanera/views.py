from rest_framework import viewsets
from .models import (
    Arancel, RestriccionImportacion, RequisitoEtiquetado, 
    RegulacionFitosanitaria, TipoCambio
)
from .serializers import (
    ArancelSerializer, RestriccionImportacionSerializer, 
    RequisitoEtiquetadoSerializer, RegulacionFitosanitariaSerializer, 
    TipoCambioSerializer
)

class ArancelViewSet(viewsets.ModelViewSet):
    queryset = Arancel.objects.all()
    serializer_class = ArancelSerializer
    filterset_fields = ['codigo_hs', 'pais_destino', 'activo'] # Habilita filtros básicos por URL


class RestriccionImportacionViewSet(viewsets.ModelViewSet):
    queryset = RestriccionImportacion.objects.all()
    serializer_class = RestriccionImportacionSerializer
    filterset_fields = ['codigo_hs', 'pais_destino', 'activo']


class RequisitoEtiquetadoViewSet(viewsets.ModelViewSet):
    queryset = RequisitoEtiquetado.objects.all()
    serializer_class = RequisitoEtiquetadoSerializer
    filterset_fields = ['codigo_hs_prefijo', 'pais_destino', 'activo']


class RegulacionFitosanitariaViewSet(viewsets.ModelViewSet):
    queryset = RegulacionFitosanitaria.objects.all()
    serializer_class = RegulacionFitosanitariaSerializer
    filterset_fields = ['codigo_hs', 'pais_destino', 'activo']


class TipoCambioViewSet(viewsets.ModelViewSet):
    queryset = TipoCambio.objects.all()
    serializer_class = TipoCambioSerializer
    filterset_fields = ['moneda_origen', 'moneda_destino', 'fecha']