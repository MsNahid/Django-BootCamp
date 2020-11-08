from django.conf.urls import url
from funda_app_1 import views

urlpatterns = [
    url('', views.index, name="index"),
]