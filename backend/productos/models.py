from django.db import models
from empresas.models import EmpresaExportadora # Importación externa a nivel de raíz

class Producto(models.Model):
    codigo_interno = models.CharField(max_length=30, unique=True)
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True, null=True)
    codigo_hs = models.CharField(max_length=10)
    categoria = models.CharField(max_length=100, blank=True, null=True)
    subcategoria = models.CharField(max_length=100, blank=True, null=True)
    unidad_medida = models.CharField(max_length=20)
    peso_unitario_kg = models.DecimalField(max_digits=10, decimal_places=4, blank=True, null=True)
    volumen_unitario_m3 = models.DecimalField(max_digits=10, decimal_places=6, blank=True, null=True)
    
    requiere_cert_origen = models.BooleanField(default=False)
    requiere_cert_sanitario = models.BooleanField(default=False)
    es_producto_controlado = models.BooleanField(default=False)
    temperatura_conservacion = models.CharField(max_length=30, blank=True, null=True)
    vida_util_dias = models.IntegerField(blank=True, null=True)
    
    empresa = models.ForeignKey(EmpresaExportadora, on_delete=models.CASCADE, related_name='productos')
    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'productos'
        indexes = [
            models.Index(fields=['codigo_hs']),
            models.Index(fields=['empresa']),
        ]

    def __str__(self):
        return f"{self.codigo_interno} - {self.nombre}"