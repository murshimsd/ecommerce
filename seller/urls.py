from django.urls import path
from . import views


urlpatterns=[
    path('product',views.product),
    path('catalogue',views.catalogue),
    path('password',views.changepassword),
    path('profile',views.profile),
    path('order',views.myorder),
    path('home',views.home)

]
