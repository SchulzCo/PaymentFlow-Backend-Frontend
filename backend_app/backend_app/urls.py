from django.contrib import admin
from django.urls import path
from django.urls import path, include

urlpatterns = [
    path('api/', include('api.urls')),  # Rutas para las APIs
]