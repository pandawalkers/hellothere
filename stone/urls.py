from django.urls import path
from stone import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', view=views.index, name='index'),
    path('', view=views.myStone),
    # path('', view=views.mystone, name='home'),
    # path('h/', views.mystone),
]

# handler404 = views.page_not_found

# views.test()
