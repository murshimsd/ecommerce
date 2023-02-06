from django.urls import path
from . import views

app_name='common' # for redirection purpose

urlpatterns=[
    path('adminlogin',views.adminlogin,name='adminlogin'),
    path('customer signup',views.customersignup,name='customersignup'),
    path('customerlogin',views.customerlogin,name='customerlogin'),
    path('',views.home,name='home'),
    path('sellersignup',views.sellersignup,name='sellersignup'),
    path('sellerlogin',views.sellerlogin,name='sellerlogin')

]