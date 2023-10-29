from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from ..models import *

class TasaCambiariaSerializer(ModelSerializer):
    class Meta:
        model = TasaCambiaria
        fields = '__all__'

class IndiceInflacionSerializer(ModelSerializer):
    class Meta:
        model = IndiceInflacion
        fields = '__all__'

class SaludFinancieraSerializer(ModelSerializer):
    class Meta:
        model = SaludFinanciera
        fields = '__all__'

class HistorialCrediticioSerializer(ModelSerializer):
    monto_total_adeudado_cliente = serializers.DecimalField(
        source='cliente_cedula.monto_total_adeudado',
        max_digits=10,
        decimal_places=2,
        read_only=True
    )
    nombre_propietario = serializers.CharField(source='cliente_cedula.nombre_cliente', read_only=True)
    fecha = serializers.DateTimeField

    class Meta:
        model = HistorialCrediticio
        fields = ['id', 'cliente_cedula', 'monto_total_adeudado_cliente', 'rnc_empresa_adeuda', 'concepto_deuda', 'fecha', 'nombre_propietario']

class ConsultaServicioTasaCambioSerializer(ModelSerializer):
    class Meta:
        model = ConsultaServicioTasaCambio
        fields = '__all__'