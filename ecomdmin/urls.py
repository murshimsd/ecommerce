from django.urls import path
from . import views
 
app_name='ecomdmin'  #for redirection purpose

urlpatterns=[
    path('approve',views.approve,name='approve'),
    path('customerlist',views.customerlist,name='customerlist'),
    path('home',views.home,name='home'),
    path('sellerlist',views.sellerlist,name='sellerlist')
 ]