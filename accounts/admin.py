from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User

# Register your models here.
class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('email', 'username', 'first_name', 'last_name', 'mobile')
    list_filter = ('is_superuser', 'is_active', 'is_staff', 'is_verified', 'is_mobile_verified')
    ordering = ('-created_at',)
    list_display = ('email', 'username', 'first_name', 'last_name', 'mobile', 'is_superuser',
                    'is_active', 'is_staff', 'is_verified',  'is_mobile_verified')

    fieldsets = (
        (None, {"fields": ('email', 'username',
         'first_name', 'last_name', 'mobile')}),
        ('Permissions', {'fields': ('is_superuser', 'is_staff',
         'is_active', 'is_verified', 'is_mobile_verified', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'first_name', 'last_name', 'is_superuser', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(User, UserAdminConfig)
