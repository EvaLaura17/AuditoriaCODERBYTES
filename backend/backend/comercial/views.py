from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
from django.db.models import Sum, Value, FloatField
from django.db.models.functions import Coalesce

from .serializers import VentaHistoricaReadSerializer, VentaHistoricaWriteSerializer
from .models import VentaHistorica
from geografico.models import PaisDestino

# =========================
# VIEWSET PRINCIPAL
# =========================
class VentaHistoricaViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]

    def get_queryset(self):
        return VentaHistorica.objects.select_related(
            'producto',
            'distribuidor'
        ).order_by('-fecha_venta')

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return VentaHistoricaReadSerializer
        return VentaHistoricaWriteSerializer


# =========================
# REPORTE POR PAÍS
# =========================

def reporte_ventas_por_pais(request):

    paises = PaisDestino.objects.annotate(
        total_vendido=Coalesce(
            Sum('distribuidores__ventas__total_venta_usd'),
            Value(0),
            output_field=FloatField()
        )
    ).values('id', 'nombre', 'total_vendido')

    return JsonResponse(list(paises), safe=False)