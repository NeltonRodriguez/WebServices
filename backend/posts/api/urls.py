from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

post_router = DefaultRouter()

post_router.register(r'tasacambiaria', TasaCambiariaViewSet)
post_router.register(r'indiceinflacion', IndiceInflacionViewSet)
post_router.register(r'saludfinanciera', SaludFinancieraViewSet)
post_router.register(r'historialcrediticio', HistorialCrediticioViewSet)
post_router.register(r'consultaservicio', ConsultaServicioTasaCambioViewSet)