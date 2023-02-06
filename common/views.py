from django.shortcuts import render

# Create your views here.
def adminlogin(request):
    return render(request,'common/adminlogin.html')

def customersignup(request):
    return render(request,'common/customer signup.html')

def customerlogin(request):
    return render(request,'common/customerlogin.html')  

def home(request):
    return render(request,'common/project home.html')

def sellersignup(request):
    return render(request,'common/seller signup.html')

def sellerlogin(request):
    return render(request,'common/sellerlogin.html')  
