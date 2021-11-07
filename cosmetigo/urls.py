from django.contrib import admin
from django.urls import path, include
import debug_toolbar

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/auth/', include('accounts.urls')),
    path('api/recommend', include('recommender.urls')),
    path('__debug__/', include(debug_toolbar.urls)),
]
