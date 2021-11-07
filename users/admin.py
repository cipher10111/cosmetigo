from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea

# Register your models here.


class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('email', 'username', 'first_name', 'last_name', 'mobile')
    list_filter = ('email', 'username', 'first_name',
                   'last_name', 'mobile', 'is_active', 'is_staff')
    ordering = ('-created_at',)
    list_display = ('email', 'username', 'first_name', 'last_name',
                    'is_active', 'is_staff', 'mobile')

    fieldsets = (
        (None, {"fields": ('email', 'username', 'first_name', 'last_name', 'mobile')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    # formfield_overrides = {
    #     User.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    # }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'first_name', 'last_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(User, UserAdminConfig)
