from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.template.defaultfilters import slugify
from django.core.validators import MaxValueValidator, MinValueValidator

from users.models import User

# Create your models here.


class Category(models.Model):
    id = models.IntegerField(primary_key=True, editable=True)
    category_name = models.TextField(
        verbose_name=_("Category Name"),
        help_text=_("Required and unique"),
        unique=True,
        null=False,
        blank=False
    )
    is_active = models.BooleanField(default=True)
    is_returnable = models.BooleanField(default=True)
    created_at = models.DateTimeField(
        verbose_name=_("Created at"), auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(
        verbose_name=_("Updated at"), auto_now=True)

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def __str__(self):
        return self.category_name


class ProductType(models.Model):
    id = models.IntegerField(primary_key=True, editable=True)
    type_name = models.TextField(
        verbose_name=_("Type Name"),
        help_text=_("Required and unique"),
        unique=True,
        null=False,
        blank=False
    )
    serviceability_disclaimer_title = models.CharField(
        verbose_name=_("Serviceability Disclaimer Title"),
        help_text=_("Required and unique"),
        null=True,
        blank=True,
        max_length=255,
    )
    serviceability_disclaimer_desc = models.TextField(
        verbose_name=_("Serviceability Disclaimer Description"),
        help_text=_("Required and unique"),
        null=True,
        blank=True
    )
    is_active = models.BooleanField(default=True)
    is_returnable = models.BooleanField(default=True)
    created_at = models.DateTimeField(
        verbose_name=_("Created at"), auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(
        verbose_name=_("Updated at"), auto_now=True)

    class Meta:
        verbose_name = _("Product Type")
        verbose_name_plural = _("Product Types")

    def __str__(self):
        return self.type_name


class Product(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Others')
    )

    id = models.IntegerField(primary_key=True, editable=True)
    display_name = models.CharField(
        max_length=255,
        verbose_name=_("Product Display Name"),
        help_text=_("Required "),
        unique=True,
        null=False,
        blank=False
    )
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    brand_name = models.CharField(
        verbose_name=_("Brand Display Name"),
        help_text=_("Required "),
        unique=True,
        null=False,
        blank=False,
        max_length=50
    )
    base_colour = models.CharField(
        verbose_name=_("Colour"),
        help_text=_("Required"),
        null=False,
        blank=False,
        max_length=50,
    )
    colour1 = models.CharField(
        verbose_name=_("Other Colour 1"),
        max_length=50,
        default=_("")
    )
    colour2 = models.CharField(
        verbose_name=_("Other Colour 2"),
        max_length=50,
        default=_("")
    )
    price = models.IntegerField(
        verbose_name=_("Price in INR"),
        help_text=_("Required"),
        validators=[
            MinValueValidator(10)
        ]
    )
    discounted_price = models.IntegerField(
        verbose_name=_("Discounted Price in INR"),
        validators=[
            MinValueValidator(10)
        ]
    )
    qty_avail = models.IntegerField(
        verbose_name=_("No of products"),
        validators=[
            MinValueValidator(1)
        ]
    )
    gender = models.CharField(
        verbose_name=_("Select gender"),
        max_length=1,
        choices=GENDER_CHOICES
    )
    description = models.TextField(
        verbose_name=_("Product Description"),
        help_text=_("Html field allowed"),
        blank=False,
        null=False,
    )
    link = models.URLField(
        verbose_name=_("Link"),
        help_text=_("Image link of the product"),
        max_length=200,
        default=_("")
    )
    slug = models.SlugField(
        max_length=255,
        unique=True,
        blank=True,
        help_text=_("Leave blank for default value")
    )
    is_product_in_dataset = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)
    product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(
        verbose_name=_("Created at"), auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(
        verbose_name=_("Updated at"), auto_now=True)

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")
        ordering = ("-created_at",)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.display_name)
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.display_name


# class Comments(models.Model):
#     product_id = models.ForeignKey(Product, on_delete=models.RESTRICT)
#     total_rating = models.IntegerField()
#     comment = ArrayField(

#     )
#     total_rated_user = models.IntegerField(
#         default=0, 
#         validators=[MinValueValidator(0)]
#     )


# class ProductDetailsKey(models.Model):
#     # product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
#     name = models.CharField(max_length=255, verbose_name=_(
#         "Name"), help_text=_("Product details name and max 255 characters allowed"))

#     class Meta:
#         verbose_name = _("Product Details Key")
#         verbose_name_plural = _("Product Details Keys")

#     def __str__(self):
#         return self.name


# class ProductDetailsValue(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     key = models.ForeignKey(ProductDetailsKey, on_delete=models.CASCADE)
#     value = models.CharField(verbose_name=_("Value"), help_text=_(
#         "Product details value and max 255 characters allowed"), max_length=255)

#     class Meta:
#         verbose_name = _("Product Details Value")
#         verbose_name_plural = _("Product Details Values")

#     def __str__(self):
#         return self.value


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
        default=_("")
    )
    is_feature = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Product Image")
        verbose_name_plural = _("Product Images")

# class Review(models.Model):
#     rating_average = models.FloatField(default=0)
#     review_count = models.IntegerField(default=0)
#     comment = models.TextField(blank=True, null=True)
#     user = models.ForeignKey(User, on_delete=models.RESTRICT)

#     @property
#     def rating_average(self):
#         return  self.reviews.aggregate(models.Avg('rating')).get('rating__avg')
    
#     @property
#     def review_count(self):
#         return self.reviews.count()
