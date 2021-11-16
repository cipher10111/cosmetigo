# Generated by Django 3.2.8 on 2021-11-16 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_product_brand_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='product',
            name='gender',
            field=models.CharField(choices=[('M', 'Men'), ('F', 'Women'), ('U', 'Unisex')], max_length=1, verbose_name='Select gender'),
        ),
    ]