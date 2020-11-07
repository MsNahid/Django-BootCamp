from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# def index(request):
#     return HttpResponse('<h1>hello wolrd</h1>')

def index(request):
    index_var = {"nahid": "Nahid da huntsman"}
    return render(request, "funda_app_1\index.html", context=index_var)
