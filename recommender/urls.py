from django.urls import path
from .views import YourView

urlpatterns = [
    path('', YourView.as_view()),
]
