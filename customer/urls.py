from django.urls import path
from . import views

urlpatterns=[
    path('home',views.home),
    path('mycart',views.cart),
    path('details',views.details),
    path('changeorder',views.changeorder),
    path('myorder',views.myorder),
    path('profile',views.profile)
]