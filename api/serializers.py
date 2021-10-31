from rest_framework import serializers
from .models import Category, Product

# Category Serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'is_active',
                  'created_at', 'updated_at')
        


class CreateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'slug', 'is_active')

# Product Serializers


class ProductSerializer(serializers.ModelSerializer):
    # category = CategorySerializer()
    # product_type = ProductTypeSerializer()

    class Meta:
        model = Product
        fields = ('id', 'title', 'slug', 'category', 'description', 'regular_price',
                  'discount_price', 'is_active', 'created_at', 'updated_at')


class CreateProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'category', 'description', 'regular_price',
                  'discount_price', 'is_active')
