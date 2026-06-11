from django.db import models
# Importaciones de los componentes independientes de la raíz
from empresas.models import EmpresaExportadora
from geografico.models import PaisDestino
from productos.models import Producto
from distribuidores.models import Distribuidor

class Exportacion(models.Model):
    INCOTERM_CHOICES = [(x, x) for x in ['EXW','FCA','FAS','FOB','CFR','CIF','CPT','CIP','DAP','DPU','DDP']]
    VIA_CHOICES = [('maritimo', 'Marítimo'), ('aereo', 'Aéreo'), ('terrestre', 'Terrestre'), ('multimodal', 'Multimodal')]
    ESTADO_CHOICES = [
        ('borrador', 'Borrador'), ('confirmada', 'Confirmada'), ('en_aduana', 'En Aduana'),
        ('en_transito', 'En Tránsito'), ('entregada', 'Entregada'), ('cancelada', 'Cancelada'),
        ('con_incidencia', 'Con Incidencia')
    ]

    numero_exportacion = models.CharField(max_length=30, unique=True, blank=True) 
    empresa = models.ForeignKey(EmpresaExportadora, on_delete=models.CASCADE, related_name='exportaciones')
    pais_destino = models.ForeignKey(PaisDestino, on_delete=models.CASCADE, related_name='exportaciones')
    distribuidor = models.ForeignKey(Distribuidor, on_delete=models.SET_NULL, blank=True, null=True, related_name='exportaciones')
    
    fecha_embarque = models.DateField()
    fecha_llegada_estimada = models.DateField(blank=True, null=True)
    fecha_llegada_real = models.DateField(blank=True, null=True)
    
    incoterm = models.CharField(max_length=3, choices=INCOTERM_CHOICES)
    via_transporte = models.CharField(max_length=20, choices=VIA_CHOICES)
    empresa_naviera = models.CharField(max_length=150, blank=True, null=True)
    numero_contenedor = models.CharField(max_length=30, blank=True, null=True)
    numero_bl = models.CharField(max_length=50, blank=True, null=True)
    puerto_embarque = models.CharField(max_length=100, blank=True, null=True)
    puerto_destino = models.CharField(max_length=100, blank=True, null=True)
    
    valor_fob_usd = models.DecimalField(max_digits=14, decimal_places=2, null=True, blank=True)
    flete_usd = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    seguro_usd = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    
    # Campo calculado en la Base de Datos, por lo que se define read-only
    valor_cif_usd = models.DecimalField(max_digits=14, decimal_places=2, editable=False, null=True, blank=True)
    
    estado = models.CharField(max_length=30, choices=ESTADO_CHOICES, default='borrador')
    observaciones = models.TextField(blank=True, null=True)
    usuario_creacion = models.CharField(max_length=60, blank=True, null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'exportaciones'

    def __str__(self):
        return self.numero_exportacion or f"Borrador #{self.id}"


class ItemExportacion(models.Model):
    exportacion = models.ForeignKey(Exportacion, on_delete=models.CASCADE, related_name='items')
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE, related_name='items_exportacion')
    numero_linea = models.SmallIntegerField()
    cantidad = models.DecimalField(max_digits=14, decimal_places=4)
    unidad_medida = models.CharField(max_length=20)
    precio_unitario_usd = models.DecimalField(max_digits=12, decimal_places=4)
    descuento_pct = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    
    # Campo calculado por DB
    subtotal_usd = models.DecimalField(max_digits=14, decimal_places=2, editable=False, null=True, blank=True)
    peso_total_kg = models.DecimalField(max_digits=14, decimal_places=4, blank=True, null=True)
    lote = models.CharField(max_length=50, blank=True, null=True)
    fecha_vencimiento = models.DateField(blank=True, null=True)

    class Meta:
        db_table = 'items_exportacion'
        unique_together = ('exportacion', 'numero_linea')

    def __str__(self):
        return f"{self.exportacion.numero_exportacion} - Línea {self.numero_linea}"


class DocumentoAduanero(models.Model):
    TIPO_DOC_CHOICES = [
        ('DUE','DUE'), ('BL','BL'), ('guia_aerea','Guía Aérea'), ('cert_origen','Cert. Origen'),
        ('cert_sanitario','Cert. Sanitario'), ('cert_fitosanitario','Cert. Fitosanitarios'),
        ('factura_comercial','Factura Comercial'), ('lista_empaque','Lista Empaque'),
        ('cert_analisis','Cert. Análisis'), ('permiso_importacion','Permiso Importación'), ('otro','Otro')
    ]
    ESTADO_DOC_CHOICES = [
        ('pendiente','Pendiente'), ('emitido','Emitido'), ('aprobado','Aprobado'),
        ('rechazado','Rechazado'), ('vencido','Vencido')
    ]
    exportacion = models.ForeignKey(Exportacion, on_delete=models.CASCADE, related_name='documentos')
    tipo_documento = models.CharField(max_length=50, choices=TIPO_DOC_CHOICES)
    numero_documento = models.CharField(max_length=60, blank=True, null=True)
    entidad_emisora = models.CharField(max_length=150, blank=True, null=True)
    fecha_emision = models.DateField(blank=True, null=True)
    fecha_vencimiento = models.DateField(blank=True, null=True)
    archivo_url = models.TextField(blank=True, null=True)
    estado = models.CharField(max_length=20, choices=ESTADO_DOC_CHOICES, default='pendiente')
    observaciones = models.TextField(blank=True, null=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'documentos_aduaneros'

    def __str__(self):
        return f"{self.tipo_documento} - {self.numero_documento or 'S/N'}"