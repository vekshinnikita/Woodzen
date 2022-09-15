from django.contrib import admin
from django.utils.safestring import mark_safe
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms
from .models import News, Subscribers

class NewsAdminForm(forms.ModelForm):
    description = forms.CharField(label="Описание", widget=CKEditorUploadingWidget())
    
    class Meta:
        model = News
        fields = "__all__"

# Register your models here.
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title','get_image',"draft")
    save_on_top = True
    list_editable =("draft", )
    form = NewsAdminForm
    readonly_fields = ("get_image",'created_at')
    fieldsets = (
        (None, {
            "fields": (("title",),)
        }),
        (None, {
            "fields": ( ("image", "get_image"),)
        }),
        (None, {
            "fields": ( ("prescription"),)
        }),
        (None, {
            "fields": ( ("description"),'created_at')
        }),
        (None, {
            "fields": ("mailing", "draft",)
        }),
    )
    def get_image(self, obj):
        return mark_safe(f'<img src={obj.image.url}  height="110"')


@admin.register(Subscribers)
class SubscribersAdmin(admin.ModelAdmin):
    list_display = ("email",)