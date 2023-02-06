from django.urls import path
from . import views
 

urlpatterns=[
    path('approve',views.approve),
    path('customerlist',views.customerlist),
    path('home',views.home),
    path('sellerlist',views.sellerlist)
 ]