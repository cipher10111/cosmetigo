# Generated by Django 3.2.8 on 2021-11-16 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20211116_1500'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='producttype',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
