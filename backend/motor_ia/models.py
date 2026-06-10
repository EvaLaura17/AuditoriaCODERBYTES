from django.db import models
from productos.models import Producto           # Reestructurado desde su app independiente
from distribuidores.models import Distribuidor   # Reestructurado desde su app independiente

class ProyeccionDemanda(models.Model):
    MODELO_CHOICES = [('ARIMA','ARIMA'), ('Prophet','Prophet'), ('ensemble','Ensemble'), ('manual','Manual')]
    
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE, related_name='proyecciones')
    distribuidor = models.ForeignKey(Distribuidor, on_delete=models.CASCADE, blank=True, null=True, related_name='proyecciones')
    fecha_proyeccion = models.DateField()
    fecha_generacion = models.DateTimeField(auto_now_add=True)
    
    cantidad_proyectada = models.DecimalField(max_digits=14, decimal_places=4)
    limite_inferior_95 = models.DecimalField(max_digits=14, decimal_places=4, blank=True, null=True)
    limite_superior_95 = models.DecimalField(max_digits=14, decimal_places=4, blank=True, null=True)
    
    modelo_utilizado = models.CharField(max_length=30, choices=MODELO_CHOICES)
    version_modelo = models.CharField(max_length=20, blank=True, null=True)
    mape_modelo = models.DecimalField(max_digits=7, decimal_places=4, blank=True, null=True)
    horizonte_semanas = models.SmallIntegerField(blank=True, null=True)
    vigente = models.BooleanField(default=True)

    class Meta:
        db_table = 'proyecciones_demanda'
        unique_together = ('producto', 'distribuidor', 'fecha_proyeccion', 'version_modelo')

    def __str__(self):
        dest = self.distribuidor.razon_social if self.distribuidor else "Global"
        return f"Proyección {self.producto.nombre} ({dest}) - {self.fecha_proyeccion}"


class AlertaStock(models.Model):
    CRITICIDAD_CHOICES = [('verde','Verde'), ('amarillo','Amarillo'), ('rojo','Rojo')]
    ESTADO_CHOICES = [('activa','Activa'), ('en_gestion','En Gestión'), ('resuelta','Resuelta'), ('descartada','Descartada')]

    producto = models.ForeignKey(Producto, on_delete=models.CASCADE, related_name='alertas_stock')
    distribuidor = models.ForeignKey(Distribuidor, on_delete=models.CASCADE, blank=True, null=True, related_name='alertas_stock')
    proyeccion = models.ForeignKey(ProyeccionDemanda, on_delete=models.SET_NULL, blank=True, null=True, related_name='alertas')
    
    fecha_alerta = models.DateTimeField(auto_now_add=True)
    fecha_quiebre_estimado = models.DateField(blank=True, null=True)
    
    stock_actual = models.DecimalField(max_digits=14, decimal_places=4, blank=True, null=True)
    stock_disponible_usd = models.DecimalField(max_digits=14, decimal_places=2, blank=True, null=True)
    demanda_proyectada = models.DecimalField(max_digits=14, decimal_places=4, blank=True, null=True)
    
    nivel_criticidad = models.CharField(max_length=10, choices=CRITICIDAD_CHOICES)
    porcentaje_cobertura = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='activa')
    usuario_asignado = models.CharField(max_length=60, blank=True, null=True)
    fecha_resolucion = models.DateTimeField(blank=True, null=True)
    notas_resolucion = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'alertas_stock' 

    def __str__(self):
        return f"Alerta {self.nivel_criticidad.upper()} - {self.producto.nombre} ({self.estado})"