from django.shortcuts import render
from rest_framework import generics, serializers, status
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import CategorySerializer, ProductSerializer, ProductTypeSerializer
from .models import Product, Category, ProductType

# Create your views here.


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            category_id = serializer.data.get('id')
            category_name = serializer.data.get('category_name')
            is_active = serializer.data.get('is_active')
            is_returnable = serializer.data.get('is_returnable')

            queryset = Category.objects.filter(id=category_id)
            if queryset.exists():
                category = queryset[0]
                # category.id = category_id
                category.category_name = category_name
                category.is_active = is_active
                category.is_returnable = is_returnable

                return Response(CategorySerializer(category).data, status=status.HTTP_200_OK)
            else:
                category = Category(
                    # id=category_id,
                    category_name=category_name,
                    is_active=is_active,
                    is_returnable=is_returnable
                )
                category.save()

                return Response(CategorySerializer(category).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


class ProductTypeView(generics.ListAPIView):
    queryset = ProductType.objects.all()
    serializer_class = ProductTypeSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            type_id = serializer.data.get('id')
            type_name = serializer.data.get('type_name')
            serviceability_disclaimer_title = serializer.data.get(
                'serviceability_disclaimer_title')
            serviceability_disclaimer_desc = serializer.data.get(
                'serviceability_disclaimer_desc')
            is_active = serializer.data.get('is_active')
            is_returnable = serializer.data.get('is_returnable')

            queryset = ProductType.objects.filter(id=type_id)
            if queryset.exists():
                product_type = queryset[0]
                product_type.id = type_id
                product_type.type_name = type_name
                product_type.serviceability_disclaimer_title = serviceability_disclaimer_title
                product_type.serviceability_disclaimer_desc = serviceability_disclaimer_desc
                product_type.is_active = is_active
                product_type.is_returnable = is_returnable

                return Response(ProductTypeSerializer(product_type).data, status=status.HTTP_200_OK)
            else:
                product_type = ProductType(
                    id=type_id,
                    type_name=type_name,
                    serviceability_disclaimer_title=serviceability_disclaimer_title,
                    serviceability_disclaimer_desc=serviceability_disclaimer_desc,
                    is_active=is_active,
                    is_returnable=is_returnable
                )
                product_type.save()

                return Response(ProductTypeSerializer(product_type).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        print(serializer)
        if serializer.is_valid():
            product_id = serializer.data.get('id')
            display_name = serializer.data.get('display_name')
            brand_name = serializer.data.get('brand_name')
            base_colour = serializer.data.get('base_colour')
            colour1 = serializer.data.get('colour1')
            colour2 = serializer.data.get('colour2')
            price = serializer.data.get('price')
            discounted_price = serializer.data.get('discounted_price')
            qty_avail = serializer.data.get('qty_avail')
            gender = serializer.data.get('gender')
            description = serializer.data.get('description')
            link = serializer.data.get('link')
            is_active = serializer.data.get('is_active')
            is_product_in_dataset = serializer.data.get(
                'is_product_in_dataset')
            category = serializer.data.get('category')
            product_type = serializer.data.get('product_type')

            queryset = ProductType.objects.filter(id=product_id)
            if queryset.exists():
                product = queryset[0]
                product.display_name = display_name
                product.brand_name = brand_name
                product.base_colour = base_colour
                product.colour1 = colour1
                product.colour2 = colour2
                product.price = price
                product.discounted_price = discounted_price
                product.qty_avail = qty_avail
                product.gender = gender
                product.description = description
                product.link = link
                product.is_product_in_dataset = is_product_in_dataset
                product.is_active = is_active
                product.category = category
                product.product_type = product_type

                return Response(ProductTypeSerializer(product_type).data, status=status.HTTP_200_OK)
            else:
                product = ProductType(
                    id=product_id,
                    display_name=display_name,
                    brand_name=brand_name,
                    base_colour=base_colour,
                    colour1=colour1,
                    colour2=colour2,
                    price=price,
                    discounted_price=discounted_price,
                    qty_avail=qty_avail,
                    gender=gender,
                    description=description,
                    link=link,
                    is_product_in_dataset=is_product_in_dataset,
                    is_active=is_active,
                    category=category,
                    product_type=product_type,
                )
                product.save()

                return Response(ProductTypeSerializer(product_type).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


def main(request):
    return HttpResponse("Hello World!")
