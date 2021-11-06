from rest_framework import serializers
from .models import Category, Product, ProductType

# Category Serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

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
        exclude = ('slug', )


class CreateProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'category', 'description', 'regular_price',
                  'discount_price', 'is_active')

class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = '__all__'