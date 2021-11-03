from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import (
    Product,
    Category,
    ProductImage,
    ProductDetailsKey,
    ProductDetailsValue
)

# Register your models here.

admin.site.register(Category, MPTTModelAdmin)
admin.site.register(ProductDetailsKey)

class ProductDetailsValueInline(admin.TabularInline):
    model = ProductDetailsValue
    fields = ("key", "value")


class ProductImageInline(admin.TabularInline):
    model = ProductImage

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProductDetailsValueInline,
        ProductImageInline
    ]

# class ProductImageAdmin(admin.ModelAdmin):
#     inlines = [
#         ProductDetailsInline,
#         ProductImageInline,
#
