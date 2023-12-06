from rest_framework.viewsets import ModelViewSet
from ..models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework import filters

class TasaCambiariaViewSet(ModelViewSet):
    queryset = TasaCambiaria.objects.all()
    serializer_class = TasaCambiariaSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['codigo_moneda', 'tasa']

class IndiceInflacionViewSet(ModelViewSet):
    queryset = IndiceInflacion.objects.all()
    serializer_class = IndiceInflacionSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['periodo', 'indice']

class SaludFinancieraViewSet(ModelViewSet):
    queryset = SaludFinanciera.objects.all()
    serializer_class = SaludFinancieraSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['cliente_cedula', 'nombre_cliente']

class HistorialCrediticioViewSet(ModelViewSet):
    queryset = HistorialCrediticio.objects.all()
    serializer_class = HistorialCrediticioSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['cliente_cedula__cliente_cedula', 'rnc_empresa_adeuda', 'concepto_deuda', 'fecha']

class ConsultaServicioTasaCambioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ConsultaServicioTasaCambio.objects.all()
    serializer_class = ConsultaServicioTasaCambioSerializer
    filter_backends = [filters.SearchFilter]