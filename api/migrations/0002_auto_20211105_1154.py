# Generated by Django 3.2.8 on 2021-11-05 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='level',
        ),
        migrations.RemoveField(
            model_name='category',
            name='lft',
        ),
        migrations.RemoveField(
            model_name='category',
            name='name',
        ),
        migrations.RemoveField(
            model_name='category',
            name='parent',
        ),
        migrations.RemoveField(
            model_name='category',
            name='rght',
        ),
        migrations.RemoveField(
            model_name='category',
            name='slug',
        ),
        migrations.RemoveField(
            model_name='category',
            name='tree_id',
        ),
        migrations.AddField(
            model_name='category',
            name='category_name',
            field=models.TextField(default='', help_text='Required and unique', unique=True, verbose_name='Category Name'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='category',
            name='is_returnable',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(default='uploads/images/default.png', help_text='Upload a product image', upload_to='uploads/images/', verbose_name='Image'),
        ),
    ]
