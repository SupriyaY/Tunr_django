
from django.shortcuts import render
# from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Artist
from .serializers import *
# Create your views here.


class ArtistView(viewsets.ModelViewSet):
   queryset = Artist.objects.all()
   serializer_class = ArtistSerializer