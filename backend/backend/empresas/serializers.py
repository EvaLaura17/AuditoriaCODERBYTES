from rest_framework import serializers
from .models import EmpresaExportadora

class EmpresaExportadoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmpresaExportadora
        fields = '__all__'
        # El UUID se autogenera en el modelo, por lo que debe ser de solo lectura en la API
        read_only_fields = ['uuid', 'fecha_creacion', 'fecha_actualizacion']

    def validate_ruc_nit(self, value):
        """
        Validación personalizada opcional: Limpiar espacios o caracteres 
        del RUC/NIT antes de guardarlo.
        """
        return value.strip()