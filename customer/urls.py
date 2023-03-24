from django.urls import path
from . import views

app_name='customer' # for redirection purpose

urlpatterns=[
    path('home',views.home,name='home'),
    path('mycart',views.cart,name='mycart'),
    path('details',views.details,name='product details'),
    path('changeorder',views.changeorder,name='change order'),
    path('myorder',views.myorder,name='my order'),
    path('profile',views.profile,name='profile'),
    path('cssintro',views.cssintro,name='cssintro'),
    path('cssbox',views.boxmodel,name='boxmodel'),
    path('cssprop',views.cssprop,name='cssprop'),
    path('position',views.position_relative,name="position_relative"),
    path('positionsticky',views.positionsticky,name="positionsticky"),
    path('grid',views.grid,name='grid'),
    path('grid1',views.grid1,name='grid1'),
    path('grid2',views.grid2,name='grid2'),
    path('grid3',views.grid3,name='grid3'),
    path('flux',views.flux,name='flux'),
    path('flex1',views.flex1,name='flex1'),
    path('fb',views.fb,name='fb'),
    path('madrid',views.madrid,name='madrid')



]