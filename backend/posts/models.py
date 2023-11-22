from django.db import models
from .validators import validate_cedula

OPCIONES_INDICADOR = [
    ('S', 'S'),
    ('N', 'N'),
]

class TasaCambiaria(models.Model):
    codigo_moneda = models.CharField(max_length=3, unique=True)  # PES, DOL, EUR, etc.
    tasa = models.DecimalField(max_digits=5, decimal_places=2)  # Max 999.99

    def save(self, *args, **kwargs):
        self.codigo_moneda = self.codigo_moneda.upper()
        super().save(*args, **kwargs)

    
    def __str__(self):
        return f"{self.codigo_moneda} - {self.tasa}"

class IndiceInflacion(models.Model):
    periodo = models.CharField(max_length=6, help_text="Formato: YYYY/MM")  # Formato yyyymm
    indice = models.DecimalField(max_digits=5, decimal_places=2)  # Max 999.99

    def __str__(self):
        return f"{self.periodo} - {self.indice}%"
    
class SaludFinanciera(models.Model):
    cliente_cedula = models.CharField(max_length=11, unique=True, validators=[validate_cedula])
    nombre_cliente = models.CharField(max_length=100, default="Nombre Predeterminado")
    indicador = models.CharField(max_length=1, choices=OPCIONES_INDICADOR)
    comentario = models.TextField()
    monto_total_adeudado = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.cliente_cedula} - {self.nombre_cliente}"

class HistorialCrediticio(models.Model):
    cliente_cedula = models.ForeignKey(SaludFinanciera, on_delete=models.CASCADE, to_field='cliente_cedula', related_name='historial_crediticio')
    rnc_empresa_adeuda = models.CharField(max_length=15)
    concepto_deuda = models.TextField()
    fecha = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.cliente_cedula.cliente_cedula} - {self.cliente_cedula.nombre_cliente} - {self.rnc_empresa_adeuda} - {self.fecha}"

class ConsultaServicioTasaCambio(models.Model):
    moneda = models.ForeignKey(TasaCambiaria, on_delete=models.CASCADE)
    fecha_consulta = models.DateTimeField(auto_now_add=True)