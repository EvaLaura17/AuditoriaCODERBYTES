from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExportacionViewSet, ItemExportacionViewSet, DocumentoAduaneroViewSet

router = DefaultRouter()
router.register(r'despachos', ExportacionViewSet, basename='exportacion')
router.register(r'detalles-items', ItemExportacionViewSet, basename='itemexportacion')
router.register(r'documentos-soporte', DocumentoAduaneroViewSet, basename='documentoaduanero')

urlpatterns = [
    path('', include(router.urls)),
]