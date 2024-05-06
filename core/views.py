from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import *
from .models import *

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer
