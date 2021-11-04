from django.shortcuts import render
from rest_framework import generics, serializers, status
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import CategorySerializer, ProductSerializer
from .models import Product, Category

# Create your views here.


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CreateCategoryView(APIView):
    serializer_class = CategorySerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            category_id = serializer.data.get('id')
            name = serializer.data.get('name')
            slug = serializer.data.get('slug')
            is_active = serializer.data.get('is_active')

            queryset = Category.objects.filter(id=category_id)
            if queryset.exists():
                category = queryset[0]
                category.name = name
                category.slug = slug
                category.is_active = is_active

                return Response(CategorySerializer(category).data, status=status.HTTP_200_OK)
            else:
                category = Category(name=name,
                                    slug=slug, is_active=is_active)
                print(category)
                category.save()

                return Response(CategorySerializer(category).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CreateProductView(APIView):
    serializer_class = ProductSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            product_id = serializer.data.get('id')
            title = serializer.data.get('title')
            slug = serializer.data.get('slug')
            category_id = serializer.data.get('category')
            description = serializer.data.get('description')
            regular_price = serializer.data.get('regular_price')
            discount_price = serializer.data.get('discount_price')
            is_active = serializer.data.get('is_active')

            category = Category.objects.get(id=category_id)
            queryset = Product.objects.filter(id=product_id)
            if queryset.exists():
                product = queryset[0]
                product.title = title
                product.slug = slug
                product.category = category
                product.description = description
                product.regular_price = regular_price
                product.discount_price = discount_price
                product.is_active = is_active
                product.save(update_fields=['title','slug',
                             'category', 'description', 'regular_price', 'discount_price', 'is_active'])
                return Response(ProductSerializer(product).data, status=status.HTTP_200_OK)
            else:
                product = Product(title=title, slug=slug, category=category, description=description,
                                  regular_price=regular_price, discount_price=discount_price, is_active=is_active)
                print(product)
                product.save()

                return Response(ProductSerializer(product).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


def main(request):
    return HttpResponse("Hello World!")
