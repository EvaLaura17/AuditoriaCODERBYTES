from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaisDestinoViewSet

router = DefaultRouter()
router.register(r'', PaisDestinoViewSet, basename='pais-destino')

urlpatterns = [
    path('', include(router.urls)),
]