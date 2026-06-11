from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'
        # Campos de control y auditoría generados automáticamente en el backend
        read_only_fields = ['fecha_creacion']

    def validate_codigo_hs(self, value):
        """
        Validación del Sistema Armonizado (HS Code): 
        Limpia espacios y valida que consista únicamente de dígitos numéricos.
        """
        cleaned_value = value.strip()
        if not cleaned_value.isdigit():
            raise serializers.ValidationError("El código HS debe contener únicamente caracteres numéricos.")
        if len(cleaned_value) < 4 or len(cleaned_value) > 10:
            raise serializers.ValidationError("El código HS suele tener entre 4 y 10 dígitos arancelarios.")
        return cleaned_value

    def validate_codigo_interno(self, value):
        """ Limpia y estandariza el código SKU/interno a mayúsculas """
        return value.strip().upper()