from django.db import models

from backend.settings import URL_HOST

# Create your models here.
class News(models.Model):
    title = models.CharField('Название',max_length=150)
    image = models.ImageField('Изображение',upload_to="news/", help_text="Загрузите фото в jpeg или png формате")
    prescription = models.CharField('Краткое описание',max_length=250, help_text="Отображается на главной странице под заголовком", blank=True, null=True)
    description = models.TextField('Описание', help_text="Это поле будет использоваться в Email рассылки", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    mailing = models.BooleanField('Сделать рассылку', default=False, help_text="Если вы поставите здесь галочку, то при создании новости все подписчики получат эту новость на почту")
    draft = models.BooleanField('Черновик', default=False, help_text="Если вы поставите здесь галочку, то эта новость не будет отображаться на сайте")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"

    def url_image(self):
        return (URL_HOST + self.image.url)


class Subscribers(models.Model):
    email = models.EmailField('Email', max_length=150)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Подписчик"
        verbose_name_plural = "Подписчики"