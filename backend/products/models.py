from django.db import models
from backend.settings import URL_HOST

# Create your models here.

class Product(models.Model):
    title = models.CharField('Название',max_length=150)
    image = models.ImageField('Изображение',upload_to="products/", help_text="Загрузите фото в jpeg или png формате")
    draft = models.BooleanField('Черновик', default=False, help_text="Если вы поставите здесь галочку, то этот продукт не будет отображаться на сайте")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"

    def url_image(self):
        return (URL_HOST + self.image.url)


class Types(models.Model):
    title = models.CharField('Название',max_length=150)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="types")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Вид"
        verbose_name_plural = "Виды"


class Materials(models.Model):
    title = models.CharField('Название',max_length=150)
    price = models.IntegerField('Цена', default=0)
    image = models.ImageField('Изображение',upload_to="materials/")
    type = models.ForeignKey(Types, on_delete=models.CASCADE, related_name="materials")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Материал"
        verbose_name_plural = "Материалы"

    def url_image(self):
        return (URL_HOST + self.image.url)


    