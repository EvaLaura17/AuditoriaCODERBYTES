from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmpresaExportadoraViewSet

router = DefaultRouter()
router.register(r'', EmpresaExportadoraViewSet, basename='empresa-exportadora')

urlpatterns = [
    path('', include(router.urls)),
]