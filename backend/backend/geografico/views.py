from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter

from django_filters.rest_framework import DjangoFilterBackend

from .models import PaisDestino
from .serializers import PaisDestinoSerializer


class PaisDestinoViewSet(viewsets.ModelViewSet):

    serializer_class = PaisDestinoSerializer

    queryset = PaisDestino.objects.all().order_by(
        'nombre'
    )

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter
    ]

    filterset_fields = [
        'activo',
        'region',
        'codigo_iso2',
    ]

    search_fields = [
        'nombre',
        'nombre_en',
        'region',
    ]

    # BORRADO LÓGICO
    def destroy(self, request, *args, **kwargs):

        pais = self.get_object()

        pais.activo = False
        pais.save()

        return Response(
            {
                "message": "País desactivado"
            },
            status=status.HTTP_200_OK
        )

    # RESTAURAR
    @action(detail=True, methods=['patch'])
    def restaurar(self, request, pk=None):

        pais = self.get_object()

        pais.activo = True
        pais.save()

        return Response(
            {
                "message": "País restaurado"
            },
            status=status.HTTP_200_OK
        )