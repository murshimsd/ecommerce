from django.shortcuts import render

# Create your views here.

def product(request):
    return render(request,'seller/addproduct.html')

def catalogue(request):
    return render(request,'seller/catalogue.html')

def changepassword(request):
    return render(request,'seller/changepsd.html')  

def profile(request):
    return render(request,'seller/profile.html')

def myorder(request):
    return render(request,'seller/myorder.html')

def home(request):
    return render(request,'seller/home.html')
