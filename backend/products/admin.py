from django.contrib import admin
from django.utils.safestring import mark_safe
from nested_admin import NestedModelAdmin, NestedTabularInline, NestedStackedInline

from .models import Materials, Product, Types

# Register your models here.

class MaterialsInline(NestedTabularInline):
    model = Materials
    extra = 0
    readonly_fields = ("get_image",)

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.image.url}  height="110"')

class TypesInline(NestedStackedInline):
    model = Types
    inlines = [MaterialsInline,]
    extra = 0


class ProductAdmin(NestedModelAdmin):
    list_display = ('title','get_image',"draft")
    inlines = [TypesInline,]
    save_on_top = True
    list_editable =("draft", )
    readonly_fields = ("get_image",)
    fieldsets = (
        (None, {
            "fields": (("title",),)
        }),
        (None, {
            "fields": ( ("image", "get_image"),)
        }),
        (None, {
            "fields": ("draft",)
        }),
    )
    def get_image(self, obj):
        return mark_safe(f'<img src={obj.image.url}  height="110"')

admin.site.register(Product, ProductAdmin)