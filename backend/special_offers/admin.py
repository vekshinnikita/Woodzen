from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import SpecialOffers

# Register your models here.
@admin.register(SpecialOffers)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title','get_image',"draft")
    save_on_top = True
    list_editable =("draft", )
    readonly_fields = ("get_image",'created_at')
    fieldsets = (
        (None, {
            "fields": (("title",),)
        }),
        (None, {
            "fields": ( ("image", "get_image"),)
        }),
        (None, {
            "fields": ( ("description"),'created_at')
        }),
        (None, {
            "fields": ("draft",)
        }),
    )
    def get_image(self, obj):
        return mark_safe(f'<img src={obj.image.url}  height="110"')

