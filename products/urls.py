from django.urls import path
from .views import *

urlpatterns = [
   path('category/import-export', ExportImportExcel.as_view()),
   path('type/import-export', ProductTypeExportImport.as_view()),
   path('product/import-export', ProductExportImport.as_view()),
]