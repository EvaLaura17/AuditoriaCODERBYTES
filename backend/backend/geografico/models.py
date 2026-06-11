from django.db import models

class PaisDestino(models.Model):
    codigo_iso2 = models.CharField(max_length=2, unique=True)
    codigo_iso3 = models.CharField(max_length=3, unique=True)
    nombre = models.CharField(max_length=100)
    nombre_en = models.CharField(max_length=100, blank=True, null=True)
    region = models.CharField(max_length=60, blank=True, null=True)
    moneda_codigo = models.CharField(max_length=3, blank=True, null=True)
    moneda_nombre = models.CharField(max_length=60, blank=True, null=True)
    idioma_oficial = models.CharField(max_length=60, blank=True, null=True)
    zona_horaria = models.CharField(max_length=60, blank=True, null=True)
    acuerdo_comercial = models.CharField(max_length=100, blank=True, null=True)
    activo = models.BooleanField(default=True)

    class Meta:
        db_table = 'paises_destino'

    def __str__(self):
        return self.nombre