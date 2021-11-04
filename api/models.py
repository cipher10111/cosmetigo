from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from mptt.models import MPTTModel, TreeForeignKey

# Create your models here.


class Category(MPTTModel):
    name = models.CharField(
        verbose_name=_("Category Name"),
        help_text=_("Required and unique and max 255 characters allowed"),
        max_length=255,
        unique=True,
        null=False,
        blank=False
    )
    slug = models.SlugField(
        verbose_name=_("Category safe URL"),
        max_length=255,
        unique=True
    )
    parent = TreeForeignKey("self", on_delete=models.CASCADE,
                            null=True, blank=True, related_name="children")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(
        verbose_name=_("Created at"), auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(
        verbose_name=_("Updated at"), auto_now=True)

    class MPTTMeta:
        order_insertion_by = ["name"]

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def get_absolute_url(self):
        return reverse("api:category_list", args=[self.slug])

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)
    title = models.CharField(
        verbose_name=_("Product Title"),
        help_text=_("Required and max 255 characters allowed"),
        max_length=255,
        null=False,
        blank=False
    )
    description = models.TextField(verbose_name=_(
        "description"), help_text=_("May be blank"), blank=True)
    slug = models.SlugField(max_length=255)
    regular_price = models.DecimalField(
        verbose_name=_('Regular price'),
        help_text=_("Maximum 999.99"),
        error_messages={
            "name": {
                "max_length": "The price must be between 0 and 999.99.",
            },
        },
        max_digits=5,
        decimal_places=2,
    )
    discount_price = models.DecimalField(
        verbose_name='Discount price',
        help_text="Maximum 999.99",
        error_messages={
            "name": {
                "max_length": "The price must be between 0 and 999.99.",
            },
        },
        max_digits=5,
        decimal_places=2,
    )
    is_active = models.BooleanField(
        verbose_name=_("Product visibility"),
        help_text=_("Change product visibility"),
        default=True,
    )
    created_at = models.DateTimeField(
        verbose_name=_("Created at"), auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(
        verbose_name=_("Updated at"), auto_now=True)

    class Meta:
        ordering = ("-created_at",)
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def get_absolute_url(self):
        return reverse("api:product_detail", args=[self.slug])

    def __str__(self):
        return self.title


class ProductDetailsKey(models.Model):
    # product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=255, verbose_name=_(
        "Name"), help_text=_("Product details name and max 255 characters allowed"))

    class Meta:
        verbose_name = _("Product Details Key")
        verbose_name_plural = _("Product Details Keys")

    def __str__(self):
        return self.name


class ProductDetailsValue(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    key = models.ForeignKey(ProductDetailsKey, on_delete=models.CASCADE)
    value = models.CharField(verbose_name=_("Value"), help_text=_(
        "Product details value and max 255 characters allowed"), max_length=255)

    class Meta:
        verbose_name = _("Product Details Value")
        verbose_name_plural = _("Product Details Values")

    def __str__(self):
        return self.value


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_image")
    image = models.ImageField(
        verbose_name=_("Image"),
        help_text=_("Upload a product image"),
        upload_to="uploads/images/",
        default="uploads/images/default.png"
    )
    alt_text = models.CharField(
        max_length=255,
        verbose_name=_("Alternative text"),
        null=True,
        blank=True
    )
    is_feature = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Product Image")
        verbose_name_plural = _("Product Images")
