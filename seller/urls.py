from django.urls import path
from . import views

app_name='seller' # for redirection purpose

urlpatterns=[
    path('product',views.product,name='product'),
    path('catalogue',views.catalogue,name='catalogue'),
    path('password',views.changepassword,name='changepassword'),
    path('profile',views.profile,name='profile'),
    path('order',views.myorder,name='myorder'),
    path('home',views.home,name='home'),
    path('js',views.js,name='js'),
    path('dom',views.dom,name='dom'),
    path('color',views.color,name='color'),
    path('calc',views.calc,name='calc'),
    path('aaa',views.aaa,name='aaa'),
    path('form',views.form,name='form'),
    path('form1',views.form1,name='form1'),
    path('validation',views.validation,name='validation'),
    path('validform',views.validform,name='validform'),
    path('jq',views.jq,name='jq'),
    path('animation',views.animation,name='animation'),
    path('modaltable',views.modaltable,name='modaltable'),
    path('jqhtml',views.jqhtml,name='jqhtml'),
    path('arraystring',views.arraystring,name='arraystring'),
    path('sliderimage',views.sliderimage,name='sliderimage'),
    path('jg',views.jg,name='jg'),
    path('stringmethods',views.stringmethods,name='stringmethods'),
    path('function',views.function,name='function'),
    path('dom1',views.dom1,name='dom1')
    
   

]
