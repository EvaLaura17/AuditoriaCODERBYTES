from rest_framework import serializers
from .models import PaisDestino

class PaisDestinoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaisDestino
        fields = '__all__'

    def validate_codigo_iso2(self, value):
        """ Asegura que el código ISO alpha-2 se guarde siempre en mayúsculas y sin espacios """
        cleaned_value = value.strip().upper()
        if len(cleaned_value) != 2:
            raise serializers.ValidationError("El código ISO2 debe tener exactamente 2 caracteres.")
        return cleaned_value

    def validate_codigo_iso3(self, value):
        """ Asegura que el código ISO alpha-3 se guarde siempre en mayúsculas y sin espacios """
        cleaned_value = value.strip().upper()
        if len(cleaned_value) != 3:
            raise serializers.ValidationError("El código ISO3 debe tener exactamente 3 caracteres.")
        return cleaned_value

    def validate_moneda_codigo(self, value):
        """ Convierte el código de la moneda a mayúsculas si viene en la petición """
        if value:
            return value.strip().upper()
        return value