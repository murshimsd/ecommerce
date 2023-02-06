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