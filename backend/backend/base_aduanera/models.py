from django.db import models
from geografico.models import PaisDestino

class Arancel(models.Model):
    pais_destino = models.ForeignKey(PaisDestino, on_delete=models.CASCADE)
    codigo_hs = models.CharField(max_length=10)
    descripcion_partida = models.TextField(blank=True, null=True)
    arancel_ad_valorem = models.DecimalField(max_digits=7, decimal_places=4, blank=True, null=True)
    arancel_especifico = models.DecimalField(max_digits=12, decimal_places=4, blank=True, null=True)
    unidad_arancel_esp = models.CharField(max_length=20, blank=True, null=True)
    iva_importacion = models.DecimalField(max_digits=7, decimal_places=4, blank=True, null=True)
    otros_impuestos = models.DecimalField(max_digits=7, decimal_places=4, blank=True, null=True)
    descripcion_otros = models.TextField(blank=True, null=True)
    
    tiene_preferencia = models.BooleanField(default=False)
    acuerdo_preferencia = models.CharField(max_length=100, blank=True, null=True)
    arancel_preferencial = models.DecimalField(max_digits=7, decimal_places=4, blank=True, null=True)
    
    fecha_vigencia_desde = models.DateField()
    fecha_vigencia_hasta = models.DateField(blank=True, null=True)
    activo = models.BooleanField(default=True)
    fuente = models.CharField(max_length=150, blank=True, null=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'aranceles'

class RestriccionImportacion(models.Model):
    pais_destino = models.ForeignKey(PaisDestino, on_delete=models.CASCADE)
    codigo_hs = models.CharField(max_length=10, blank=True, null=True)
    producto_descripcion = models.TextField(blank=True, null=True)
    tipo_restriccion = models.CharField(max_length=30)
    descripcion_restriccion = models.TextField()
    cantidad_cuota = models.DecimalField(max_digits=14, decimal_places=2, blank=True, null=True)
    unidad_cuota = models.CharField(max_length=20, blank=True, null=True)
    autoridad_competente = models.CharField(max_length=150, blank=True, null=True)
    base_legal = models.TextField(blank=True, null=True)
    fecha_vigencia_desde = models.DateField()
    fecha_vigencia_hasta = models.DateField(blank=True, null=True)
    activo = models.BooleanField(default=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'restricciones_importacion'

class RequisitoEtiquetado(models.Model):
    pais_destino = models.ForeignKey(PaisDestino, on_delete=models.CASCADE)
    categoria_producto = models.CharField(max_length=100, blank=True, null=True)
    codigo_hs_prefijo = models.CharField(max_length=6, blank=True, null=True)
    # Soporte nativo para Array y JSONB en Django PostgreSQL
    idiomas_requeridos = models.JSONField(default=list) # Guarda listas tipo ['es', 'pt']
    campos_obligatorios = models.JSONField(default=dict)
    
    requiere_tabla_nutricional = models.BooleanField(default=False)
    sistema_nutricional = models.CharField(max_length=30, blank=True, null=True)
    requiere_codigo_barras = models.BooleanField(default=False)
    estandar_codigo_barras = models.CharField(max_length=20, blank=True, null=True)
    requiere_registro_sanitario = models.BooleanField(default=False)
    organismo_registro = models.CharField(max_length=150, blank=True, null=True)
    requiere_fecha_vencimiento = models.BooleanField(default=True)
    formato_fecha_vencimiento = models.CharField(max_length=20, blank=True, null=True)
    instrucciones_conservacion = models.BooleanField(default=False)
    advertencias_especiales = models.TextField(blank=True, null=True)
    norma_vigente = models.CharField(max_length=200, blank=True, null=True)
    fecha_vigencia_desde = models.DateField(blank=True, null=True)
    fecha_vigencia_hasta = models.DateField(blank=True, null=True)
    activo = models.BooleanField(default=True)
    notas = models.TextField(blank=True, null=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'requisitos_etiquetado'

class RegulacionFitosanitaria(models.Model):
    pais_destino = models.ForeignKey(PaisDestino, on_delete=models.CASCADE)
    codigo_hs = models.CharField(max_length=10, blank=True, null=True)
    descripcion_producto = models.TextField(blank=True, null=True)
    tipo_regulacion = models.CharField(max_length=40)
    descripcion = models.TextField()
    organismo_emisor = models.CharField(max_length=150, blank=True, null=True)
    organismo_receptor = models.CharField(max_length=150, blank=True, null=True)
    documentos_requeridos = models.JSONField(default=dict, blank=True, null=True)
    plazo_tramite_dias = models.IntegerField(blank=True, null=True)
    costo_estimado_usd = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    vigencia_dias = models.IntegerField(blank=True, null=True)
    fecha_vigencia_desde = models.DateField(blank=True, null=True)
    fecha_vigencia_hasta = models.DateField(blank=True, null=True)
    activo = models.BooleanField(default=True)
    notas = models.TextField(blank=True, null=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'regulaciones_fitosanitarias'

class TipoCambio(models.Model):
    moneda_origen = models.CharField(max_length=3)
    moneda_destino = models.CharField(max_length=3)
    fecha = models.DateField()
    tasa = models.DecimalField(max_digits=18, decimal_places=8)
    fuente = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"{self.moneda_origen}/{self.moneda_destino} - {self.fecha}: {self.tasa}"
    class Meta:
        db_table = 'tipos_cambio'
        unique_together = ('moneda_origen', 'moneda_destino', 'fecha')