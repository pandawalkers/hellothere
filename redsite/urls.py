from django.contrib import admin
from django.urls import path, include
from stone import urls

urlpatterns = [
    path('', include('stone.urls')),
]
