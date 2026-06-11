from rest_framework import serializers
from django.db import transaction
from .models import Exportacion, ItemExportacion, DocumentoAduanero

class DocumentoAduaneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentoAduanero
        fields = '__all__'


class ItemExportacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemExportacion
        fields = '__all__'
        read_only_fields = ['exportacion', 'subtotal_usd']


class ExportacionSerializer(serializers.ModelSerializer):
    # Relaciones anidadas explícitas
    items = ItemExportacionSerializer(many=True, required=False)
    documentos = DocumentoAduaneroSerializer(many=True, read_only=True)

    class Meta:
        model = Exportacion
        fields = '__all__'
        read_only_fields = ['valor_cif_usd', 'fecha_creacion', 'fecha_actualizacion']

    def create(self, validated_data):
        """
        Permite enviar un JSON que contenga los datos de la exportación 
        y una lista de ítems dentro del mismo payload.
        """
        items_data = validated_data.pop('items', [])
        
        # Ejecutar en una transacción de base de datos para asegurar integridad absoluta
        with transaction.atomic():
            exportacion = Exportacion.objects.create(**validated_data)
            
            # Crear cada línea de detalle asociada a la exportación recién construida
            for item_data in items_data:
                ItemExportacion.objects.create(exportacion=exportacion, **item_data)
                
        return exportacion