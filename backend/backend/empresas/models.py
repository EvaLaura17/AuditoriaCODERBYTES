import uuid
from django.db import models

class EmpresaExportadora(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    razon_social = models.CharField(max_length=200)
    ruc_nit = models.CharField(max_length=30, unique=True)
    pais_origen = models.CharField(max_length=2)  # ISO 3166-1 alpha-2
    direccion = models.TextField(blank=True, null=True)
    telefono = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=120, blank=True, null=True)
    representante = models.CharField(max_length=150, blank=True, null=True)
    
    cert_iso9001 = models.BooleanField(default=False)
    cert_bpm = models.BooleanField(default=False)
    cert_haccp = models.BooleanField(default=False)
    cert_otros = models.TextField(blank=True, null=True)
    
    activo = models.BooleanField(default=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'empresas_exportadoras'

    def __str__(self):
        return self.razon_social