from django.urls import path
from .views import CategoryView, CreateCategoryView, CreateProductView, ProductView, main

urlpatterns = [
   path('', main),
   path('product', ProductView.as_view()),
   path('product/create', CreateProductView.as_view()),
   path('category', CategoryView.as_view()),
   path('category/create', CreateCategoryView.as_view()),
]