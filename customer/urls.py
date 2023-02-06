from django.urls import path
from . import views

app_name='customer' # for redirection purpose

urlpatterns=[
    path('home',views.home,name='home'),
    path('mycart',views.cart,name='mycart'),
    path('details',views.details,name='product details'),
    path('changeorder',views.changeorder,name='change order'),
    path('myorder',views.myorder,name='my order'),
    path('profile',views.profile,name='profile')
]