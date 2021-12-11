from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework import permissions

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/products/', include('products.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    from drf_yasg.views import get_schema_view
    from drf_yasg import openapi

    schema_view = get_schema_view(
        openapi.Info(
            title="Cosmetigo API",
            default_version='v1',
            description="Testing",
            terms_of_service="https://www.cosmetigo.herokuapp.com/policies/terms/",
            contact=openapi.Contact(email="contact@cosmetigo.com"),
            license=openapi.License(name="MIT License"),
        ),
        public=True,
        permission_classes=(permissions.AllowAny,),
    )

    urlpatterns.append(path('swagger', schema_view.with_ui(
        'swagger', cache_timeout=0), name='schema-swagger-ui'))
    urlpatterns.append(path(
        'redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'))
    urlpatterns.append(path('__debug__/', include(debug_toolbar.urls)))
