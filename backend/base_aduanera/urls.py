from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ArancelViewSet, RestriccionImportacionViewSet, 
    RequisitoEtiquetadoViewSet, RegulacionFitosanitariaViewSet, 
    TipoCambioViewSet
)

router = DefaultRouter()
router.register(r'aranceles', ArancelViewSet, basename='arancel')
router.register(r'restricciones', RestriccionImportacionViewSet, basename='restriccion')
router.register(r'etiquetados', RequisitoEtiquetadoViewSet, basename='etiquetado')
router.register(r'fitosanitarios', RegulacionFitosanitariaViewSet, basename='fitosanitario')
router.register(r'tipos-cambio', TipoCambioViewSet, basename='tipocambio')

urlpatterns = [
    path('', include(router.urls)),
]