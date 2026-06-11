from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProyeccionDemandaViewSet, AlertaStockViewSet

router = DefaultRouter()
router.register(r'proyecciones', ProyeccionDemandaViewSet, basename='proyecciondemanda')
router.register(r'alertas-quiebre', AlertaStockViewSet, basename='alertastock')

urlpatterns = [
    path('', include(router.urls)),
]