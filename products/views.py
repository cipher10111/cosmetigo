from django.http import HttpResponse
from rest_framework import (
    generics,
    permissions,
    status
)
from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd, random
import uuid
from django.conf import settings
from django.db.utils import IntegrityError

from .models import *
from .serializers import *

class ExportImportExcel(APIView):
    def get(self, request):
        category_objs = Category.objects.all()
        serializer = CategorySerializer(category_objs, many=True)
        df = pd.DataFrame(serializer.data)
        print(df)
        df.to_csv(f"static/excel/{uuid.uuid4()}.csv",
                  encoding='utf-8', index=False)

        return Response({"status": 200})

    def post(self, request, *args, **kwargs):
        excel_file_upload_obj = ExcelFileUpload(
            excel_file_upload=request.FILES["files"])
        excel_file_upload_obj.save()
        df = pd.read_csv(f"{settings.BASE_DIR}/{excel_file_upload_obj.excel_file_upload}")
        
        for index, row in df.iterrows():
            Category.objects.create(
                id = row["id"],
                category_name = row["category_name"],
                is_active = row["is_active"],
                is_returnable = row["is_returnable"],
            )
            print(row.tolist())
        


        return Response({"status": 200})

class ProductTypeExportImport(APIView):
    def post(self, request, *args, **kwargs):
        excel_file_upload_obj = ExcelFileUpload(
            excel_file_upload=request.FILES["files"])
        excel_file_upload_obj.save()
        df = pd.read_csv(f"{settings.BASE_DIR}/{excel_file_upload_obj.excel_file_upload}")
        
        for index, row in df.iterrows():
            ProductType.objects.create(
                id = row["id"],
                type_name = row["type_name"],
                serviceability_disclaimer_title = row["serviceability_disclaimer_title"],
                serviceability_disclaimer_desc = row["serviceability_disclaimer_desc"],
                is_active = row["is_active"],
                is_returnable = row["is_returnable"],
            )
            print(row.tolist())
            
        return Response({"status": 200})
    
class ProductExportImport(APIView):
    def post(self, request, *args, **kwargs):
        excel_file_upload_obj = ExcelFileUpload(
            excel_file_upload=request.FILES["files"])
        excel_file_upload_obj.save()
        df = pd.read_csv(f"{settings.BASE_DIR}/{excel_file_upload_obj.excel_file_upload}")
        
        for index, row in df.iterrows():
            category = Category.objects.filter(id=row["category"])[0]
            product_type = ProductType.objects.filter(id=row["product_type"])[0]
            gender = ""
            if row["gender"].lower() == "men":
                gender += 'M'
            elif row["gender"].lower() == "women":
                gender += 'W'
            else:
                gender += 'U'
            
            qty_avail=0
            try:
                Product.objects.create(
                    id = row["id"],
                    display_name = row["display_name"],
                    brand_name = row["brand_name"],
                    base_colour = row["base_colour"],
                    colour1 = row["colour1"],
                    colour2 = row["colour2"],
                    price = row["price"],
                    discounted_price = row["discounted_price"],
                    qty_avail = random.randint(1, 19),
                    gender = gender,
                    description = row["desc"],
                    link = row["image_link"],
                    # slug = row["slug"],
                    is_product_in_dataset = True,
                    category = category,
                    product_type = product_type,
                    is_active = True,
                    
                )
            except IntegrityError:
                product = Product.objects.filter(display_name=row["display_name"])
                if product.exists():
                    qty_avail += 1
                    product[0].qty_avail = qty_avail
                    product[0].save()
            print(row.tolist())
            
        return Response({"status": 200})

class NewProductAPIView(generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = NewProductSerializer
    
    def get(self, request, count):

        data = self.queryset.values().order_by("-created_at")[0:count]

        return Response({
            "success": True,
            "data": data
        }, status=status.HTTP_200_OK)
            