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
    class Meta:
        model = Product
        # exclude = ('slug', )
        fields = "__all__"

class NewProductSerializer(serializers.Serializer):
    count = serializers.IntegerField()
    class Meta:
        fields = ["product_count"]

    def validate(self, data):
        count = data.get("count", None)
        
        if not count:
            raise serializers.ValidationError({
                "error": "Count should be at least 1"
            })
        return count

class CreateProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'category', 'description', 'regular_price',
                  'discount_price', 'is_active')

class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = '__all__'