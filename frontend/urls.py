from django.urls import path
from .views import indexView

urlpatterns = [
  path('', indexView),
  path('auth/', indexView),
  path('search/', indexView),
  path('cart/', indexView),
  path('order-details/', indexView),
  path('my-order/', indexView),
  path('payment/', indexView),
  
  
]