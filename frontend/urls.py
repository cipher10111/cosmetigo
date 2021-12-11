from django.urls import path
from .views import indexView

urlpatterns = [
  path('', indexView),
  path('auth/', indexView),
  path('search/', indexView),
  path('payment/', indexView),
  path('product/', indexView),
  path('my-account/', indexView),
]