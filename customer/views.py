from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'customer/home.html')
    
def cart(request):
    return render(request,'customer/mycart.html')

def details(request):
    return render(request,'customer/productdetails.html')

def changeorder(request):
    return render(request,'customer/changeorder.html')     

def myorder(request):
    return render(request,'customer/myorder.html')

def profile(request):
    return render(request,'customer/profile.html')    

def cssintro(request):
    return render(request,'customer/cssintro.html') 

def boxmodel(request):
    return render(request,'customer/cssbox.html') 

def cssprop(request):
    return render(request,'customer/cssprop.html')    

def position_relative(request):
    return render(request,'customer/position_relative.html') 

def positionsticky(request): 
    return render(request,'customer/positionsticky.html')

def grid(request):
    return render(request,'customer/grid.html')


def grid1(request):
    return render(request,'customer/grid1.html')    


def grid2(request):
    return render(request,'customer/grid2.html')      

def grid3(request):
    return render(request,'customer/grid3.html')   

def flux(request):
    return render(request,'customer/flux.html') 

def flex1(request):
    return render(request,'customer/flex1.html')   

def fb(request):
    return render(request,'customer/fb.html')   

def madrid(request):
    return render(request,'customer/madrid.html')                              