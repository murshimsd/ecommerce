from django.urls import path
from . import views

app_name='seller' # for redirection purpose

urlpatterns=[
    path('product',views.product,name='product'),
    path('catalogue',views.catalogue,name='catalogue'),
    path('password',views.changepassword,name='changepassword'),
    path('profile',views.profile,name='profile'),
    path('order',views.myorder,name='myorder'),
    path('home',views.home,name='home')

]
