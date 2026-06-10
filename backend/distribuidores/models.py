import uuid
from django.db import models
from geografico.models import PaisDestino
from productos.models import Producto

class Distribuidor(models.Model):
    CANAL_CHOICES = [
        ('retail', 'Retail'), ('mayorista', 'Mayorista'), ('horeca', 'Horeca'),
        ('farmacia', 'Farmacia'), ('online', 'Online'), ('otro', 'Otro')
    ]
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    razon_social = models.CharField(max_length=200)
    nombre_comercial = models.CharField(max_length=200, blank=True, null=True)
    pais = models.ForeignKey(PaisDestino, on_delete=models.CASCADE, related_name='distribuidores')
    ciudad = models.CharField(max_length=100, blank=True, null=True)
    direccion = models.TextField(blank=True, null=True)
    contacto_nombre = models.CharField(max_length=150, blank=True, null=True)
    contacto_email = models.EmailField(max_length=120, blank=True, null=True)
    contacto_telefono = models.CharField(max_length=30, blank=True, null=True)
    canal = models.CharField(max_length=50, choices=CANAL_CHOICES)
    capacidad_almacenamiento_m3 = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    
    api_usuario = models.CharField(max_length=60, unique=True, blank=True, null=True)
    api_hash_pwd = models.CharField(max_length=128, blank=True, null=True)
    activo = models.BooleanField(default=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    ultima_sincronizacion = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'distribuidores'

    def __str__(self):
        return self.razon_social

class SellOut(models.Model):
    distribuidor = models.ForeignKey(Distribuidor, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    fecha = models.DateField()
    semana_iso = models.SmallIntegerField(editable=False, null=True, blank=True)
    mes = models.SmallIntegerField(editable=False, null=True, blank=True)
    anio = models.SmallIntegerField(editable=False, null=True, blank=True)
    
    cantidad_vendida = models.DecimalField(max_digits=14, decimal_places=4)
    unidad_medida = models.CharField(max_length=20)
    precio_venta_local = models.DecimalField(max_digits=12, decimal_places=4, blank=True, null=True)
    moneda_local = models.CharField(max_length=3, blank=True, null=True)
    precio_venta_usd = models.DecimalField(max_digits=12, decimal_places=4, blank=True, null=True)
    stock_cierre = models.DecimalField(max_digits=14, decimal_places=4, blank=True, null=True)
    canal_venta = models.CharField(max_length=50, blank=True, null=True)
    fuente_dato = models.CharField(max_length=30, default='api')
    fecha_registro = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'sell_out'