from rest_framework.viewsets import ModelViewSet
from ..models import *
from .serializers import *
from rest_framework import viewsets

class TasaCambiariaViewSet(ModelViewSet):
    queryset = TasaCambiaria.objects.all()
    serializer_class = TasaCambiariaSerializer

class IndiceInflacionViewSet(ModelViewSet):
    queryset = IndiceInflacion.objects.all()
    serializer_class = IndiceInflacionSerializer

class SaludFinancieraViewSet(ModelViewSet):
    queryset = SaludFinanciera.objects.all()
    serializer_class = SaludFinancieraSerializer

class HistorialCrediticioViewSet(ModelViewSet):
    queryset = HistorialCrediticio.objects.all()
    serializer_class = HistorialCrediticioSerializer
    
class ConsultaServicioTasaCambioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ConsultaServicioTasaCambio.objects.all()
    serializer_class = ConsultaServicioTasaCambioSerializer