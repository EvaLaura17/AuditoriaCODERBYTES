from rest_framework import viewsets
from rest_framework.permissions import AllowAny # Cambiar por IsAuthenticated en producción
from .serializers import VentaHistoricaReadSerializer, VentaHistoricaWriteSerializer
from django.shortcuts import render
from django.db.models import Sum, OuterRef, Subquery
from geografico.models import PaisDestino
from comercial.models import VentaHistorica

class VentaHistoricaViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        # select_related realiza un JOIN en la base de datos para traer los datos del
        # producto y distribuidor en una sola consulta SQL de alta velocidad.
        return VentaHistorica.objects.select_related('producto', 'distribuidor').order_by('-fecha_venta')

    def get_serializer_class(self):
        # Separación de responsabilidades: Lectura vs Escritura
        if self.action in ['list', 'retrieve']:
            return VentaHistoricaReadSerializer
        return VentaHistoricaWriteSerializer


def reporte_ventas_por_pais(request):
    # La misma lógica que probamos en la shell
    ventas_subquery = VentaHistorica.objects.filter(
        distribuidor__pais=OuterRef('pk')
    ).values('distribuidor__pais').annotate(
        total=Sum('total_venta_usd')
    ).values('total')

    paises = PaisDestino.objects.annotate(
        total_vendido=Subquery(ventas_subquery)
    )

    return render(request, 'comercial/reporte_paises.html', {'paises': paises})        