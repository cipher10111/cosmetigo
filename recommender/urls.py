from django.urls import path
from .views import RecommenderView

urlpatterns = [
    path('', RecommenderView.as_view()),
]
