from django.urls import path
from .views import features_list

urlpatterns = [
    path('features/', features_list, name='features-list'),
]
