from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter

from django_filters.rest_framework import DjangoFilterBackend

from .models import EmpresaExportadora
from .serializers import EmpresaExportadoraSerializer


class EmpresaExportadoraViewSet(viewsets.ModelViewSet):

    serializer_class = EmpresaExportadoraSerializer

    queryset = EmpresaExportadora.objects.all().order_by(
        'razon_social'
    )

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter
    ]

    filterset_fields = [
        'activo',
        'pais_origen',
        'ruc_nit'
    ]

    search_fields = [
        'razon_social',
        'representante',
        'email'
    ]

    def destroy(self, request, *args, **kwargs):

        empresa = self.get_object()

        empresa.activo = False
        empresa.save()

        return Response(
            {"message": "Empresa desactivada"},
            status=status.HTTP_200_OK
        )

    @action(detail=True, methods=['patch'])
    def restaurar(self, request, pk=None):

        empresa = self.get_object()

        empresa.activo = True
        empresa.save()

        return Response(
            {"message": "Empresa restaurada"},
            status=status.HTTP_200_OK
        )