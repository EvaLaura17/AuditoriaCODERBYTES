from rest_framework import serializers
from .models import Distribuidor, SellOut

class DistribuidorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Distribuidor
        # Excluimos api_hash_pwd por seguridad para que nunca viaje en las respuestas HTTP
        exclude = ['api_hash_pwd']
        
    def create(self, validated_data):
        # Si manejas contraseñas para el API del distribuidor, aquí puedes añadir lógica de hashing si fuera necesario
        return super().create(validated_data)


class SellOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellOut
        fields = '__all__'
        # Declaramos estos campos como de solo lectura ya que se calculan automáticamente en el backend
        read_only_fields = ['semana_iso', 'mes', 'anio']

    def validate(self, data):
        """
        Lógica de negocio: Extrae y calcula automáticamente los campos temporales 
        a partir de la fecha proporcionada antes de persistir el registro.
        """
        fecha = data.get('fecha')
        if fecha:
            data['anio'] = fecha.year
            data['mes'] = fecha.month
            # .isocalendar() devuelve (año_iso, semana_iso, dia_semana)
            data['semana_iso'] = fecha.isocalendar()[1]
        return data