from rest_framework import serializers
from .models import VentaHistorica
from productos.serializers import ProductoSerializer  # O el nombre de tu serializer de productos
from distribuidores.serializers import DistribuidorSerializer  # O el de distribuidores

# Serializer optimizado para lectura (GET) con datos anidados detallados
class VentaHistoricaReadSerializer(serializers.ModelSerializer):
    # Traemos datos específicos para evitar traer todo el objeto si no es necesario, o usa tu serializer entero
    producto_nombre = serializers.CharField(source='producto.nombre', read_only=True)
    producto_codigo = serializers.CharField(source='producto.codigo_interno', read_only=True)
    producto_categoria = serializers.CharField(source='producto.categoria', read_only=True)
    producto_subcategoria = serializers.CharField(source='producto.subcategoria', read_only=True)
    
    distribuidor_nombre = serializers.CharField(source='distribuidor.nombre_comercial', read_only=True)
    distribuidor_razon_social = serializers.CharField(source='distribuidor.razon_social', read_only=True)
    distribuidor_ciudad = serializers.CharField(source='distribuidor.ciudad', read_only=True)

    class Meta:
        model = VentaHistorica
        fields = [
            'id', 'fecha_venta', 'cantidad_unidades', 'precio_unitario_usd', 
            'total_venta_usd', 'canal_venta', 'creado_en',
            'producto_id', 'producto_codigo', 'producto_nombre', 'producto_categoria', 'producto_subcategoria',
            'distribuidor_id', 'distribuidor_nombre', 'distribuidor_razon_social', 'distribuidor_ciudad'
        ]

# Serializer limpio para escrituras (POST, PUT) usando IDs estándar
class VentaHistoricaWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = VentaHistorica
        fields = '__all__'
        read_only_fields = ['total_venta_usd'] # Se calcula en el método save() del modelo