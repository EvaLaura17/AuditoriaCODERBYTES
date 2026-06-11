from django.db import models
import uuid

class VentaHistorica(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    # Llaves foráneas a tus modelos existentes
    producto = models.ForeignKey('productos.Producto', on_delete=models.CASCADE, related_name='ventas')
    distribuidor = models.ForeignKey('distribuidores.Distribuidor', on_delete=models.CASCADE, related_name='ventas')
    
    # Datos de la transacción
    fecha_venta = models.DateField()
    cantidad_unidades = models.IntegerField()
    precio_unitario_usd = models.DecimalField(max_digits=10, decimal_places=2)
    total_venta_usd = models.DecimalField(max_digits=12, decimal_places=2)
    
    # Metadatos lógicos
    canal_venta = models.CharField(max_length=50, default="Mayorista") # Mayorista, Retail, Conviniencia
    creado_en = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'comercial_venta_historica'
        verbose_name = 'Venta Histórica'
        verbose_name_plural = 'Ventas Históricas'

    def save(self, *args, **kwargs):
        # Calculamos el total automáticamente antes de guardar
        self.total_venta_usd = self.cantidad_unidades * self.precio_unitario_usd
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Venta {self.producto.nombre} - Cant: {self.cantidad_unidades} ({self.fecha_venta})"