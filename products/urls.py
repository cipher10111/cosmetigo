from django.urls import path
from .views import CategoryView, ProductTypeView, ProductView

urlpatterns = [
   path('', ProductView.as_view()),
   path('category', CategoryView.as_view()),
   path('type', ProductTypeView.as_view()),
]