from django.contrib import admin

from .models import *

# Register your models here.
class CategoryAdminConfig(admin.ModelAdmin):
    # owner
    search_fields = ["id", "category_name"]
    list_filter = ["is_active", "is_returnable"]
    ordering = ["-created_at"]
    list_display = ["id", "category_name", "is_active", "is_returnable", "created_at", "updated_at"]
    
    
    fieldsets = (
        (None, { 
            "fields": ("category_name",),
          }),
        ('Permissions',{
            "fields": (
                "is_active", 
                "is_returnable"
            )
        }),
    )
    
admin.site.register(Category, CategoryAdminConfig)

class ProductTypeAdminConfig(admin.ModelAdmin):
    # owner
    search_fields = ["id", "type_name"]
    
    list_filter = ["is_active", "is_returnable"]
    
    ordering = ["-created_at"]
    
    list_display = ["id", "type_name", "is_active", "is_returnable", "created_at", "updated_at"]
    
    
    fieldsets = (
        (None, { 
            "fields": (
                "type_name", 
                "serviceability_disclaimer_title", "serviceability_disclaimer_desc"
            ),
        }),
        ('Permissions', {
            "fields": (
              "is_active", 
              "is_returnable"
            )
        }),
    )
    
admin.site.register(ProductType, ProductTypeAdminConfig)

class ProductAdminConfig(admin.ModelAdmin):
    # owner
    search_fields = ["id", "display_name", "brand_name", "base_colour", "colour1", "colour2", "price", "discounted_price", "gender"]
    
    list_filter = ["brand_name", "base_colour", "colour1", "colour2", "gender", "is_product_in_dataset", "is_active"]
    
    ordering = ["-created_at"]
    
    list_display = ["id", "display_name", "brand_name", "base_colour", "colour1", "colour2", "price", "discounted_price", "qty_avail", "gender", "link", "slug", "is_product_in_dataset", "category", "product_type", "is_active", "created_at", "updated_at"]
    
    
    fieldsets = (
        (None, { 
            "fields": (
                "display_name", 
                "brand_name", 
                "base_colour",
                "colour1",
                "colour2",
                "price", 
                "discounted_price", 
                "qty_avail", 
                "gender", 
                "description",
                "link", 
                "slug", 
                "category", 
                "product_type"
            ),
        }),
        ('Permissions', {
            "fields": (
              "is_product_in_dataset", 
              "is_active",
            )
        }),
    )
    
admin.site.register(Product, ProductAdminConfig)