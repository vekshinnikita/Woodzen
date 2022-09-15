from django.db import models

from backend.settings import URL_HOST

# Create your models here.
class SpecialOffers(models.Model):
    title = models.CharField('Название',max_length=150)
    image = models.ImageField('Изображение',upload_to="products/", help_text="Загрузите фото в jpeg или png формате")
    description = models.TextField('Описание', help_text="Пока что можно не заполнять", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    draft = models.BooleanField('Черновик', default=False, help_text="Если вы поставите здесь галочку, то это предложение не будет отображаться на сайте")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Специальное предложение"
        verbose_name_plural = "Специальные предложения"

    def url_image(self):
        return (URL_HOST + self.image.url)
