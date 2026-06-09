from rest_framework import serializers
from .models import ProyeccionDemanda, AlertaStock

class ProyeccionDemandaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProyeccionDemanda
        fields = '__all__'
        read_only_fields = ['fecha_generacion']

    def validate(self, data):
        """
        Validación Estadística: Verifica que el intervalo de confianza del 95% 
        guarde consistencia lógica matemática (inferior <= proyectado <= superior).
        """
        inf = data.get('limite_inferior_95')
        sup = data.get('limite_superior_95')
        proyectado = data.get('cantidad_proyectada')

        if inf and sup and inf > sup:
            raise serializers.ValidationError({
                "limite_inferior_95": "El límite inferior no puede ser mayor que el superior."
            })
        if inf and proyectado and inf > proyectado:
            raise serializers.ValidationError({
                "cantidad_proyectada": "La cantidad proyectada no puede caer por debajo del límite de confianza inferior."
            })
        return data


class AlertaStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlertaStock
        fields = '__all__'
        read_only_fields = ['fecha_alerta']