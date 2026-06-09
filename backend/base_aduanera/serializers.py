from rest_framework import serializers
from .models import (
    Arancel, RestriccionImportacion, RequisitoEtiquetado, 
    RegulacionFitosanitaria, TipoCambio
)

class ArancelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arancel
        fields = '__all__'
        read_only_fields = ['fecha_actualizacion']

    def validate(self, data):
        if data.get('fecha_vigencia_hasta') and data.get('fecha_vigencia_desde'):
            if data['fecha_vigencia_hasta'] < data['fecha_vigencia_desde']:
                raise serializers.ValidationError({"fecha_vigencia_hasta": "La fecha final debe ser mayor a la inicial."})
        return data

class RestriccionImportacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestriccionImportacion
        fields = '__all__'
        read_only_fields = ['fecha_actualizacion']

    def validate_cantidad_cuota(self, value):
        if value is not None and value < 0:
            raise serializers.ValidationError("La cuota no puede ser negativa.")
        return value

class RequisitoEtiquetadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequisitoEtiquetado
        fields = '__all__'
        read_only_fields = ['fecha_actualizacion']

class RegulacionFitosanitariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegulacionFitosanitaria
        fields = '__all__'
        read_only_fields = ['fecha_actualizacion']

    def validate_plazo_tramite_dias(self, value):
        if value is not None and value < 0:
            raise serializers.ValidationError("El plazo no puede ser negativo.")
        return value

class TipoCambioSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCambio
        fields = '__all__'

    def validate_tasa(self, value):
        if value <= 0:
            raise serializers.ValidationError("La tasa debe ser mayor a cero.")
        return value

    def validate(self, data):
        if data['moneda_origen'] == data['moneda_destino']:
            raise serializers.ValidationError("La moneda de origen y destino no pueden ser iguales.")
        return data