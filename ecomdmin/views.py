from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'ecomdmin/home.html')

def approve(request):
    return render(request,'ecomdmin/approve.html')

def customerlist(request):
    return render(request,'ecomdmin/customerlist.html')

def sellerlist(request):
    return render(request,'ecomdmin/sellerlist.html')