from django.urls import path
from django.contrib import admin
from . import views

# from redsite import settings
# from django.views.static import serve

urlpatterns = [
    path(r'heng/', admin.site.urls),
    path(r'home/', views.myStone),
    path(r'movie/', views.myMovie),
    path(r'test/', views.myTest),
]

# handler404 = views.page_not_found

# views.test()
