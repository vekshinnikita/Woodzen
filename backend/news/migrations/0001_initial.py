# Generated by Django 4.1.1 on 2022-09-14 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='Название')),
                ('image', models.ImageField(help_text='Загрузите фото в jpeg или png формате', upload_to='products/', verbose_name='Изображение')),
                ('prescription', models.CharField(help_text='Отображается на главной странице под заголовком', max_length=250, verbose_name='Краткое описание')),
                ('description', models.TextField(help_text='Это поле будет использоваться в Email рассылки', verbose_name='Описание')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('draft', models.BooleanField(default=False, help_text='Если вы поставите здесь галочку, то эта новость не будет отображаться на сайте', verbose_name='Черновик')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
            },
        ),
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=150, verbose_name='Email')),
            ],
            options={
                'verbose_name': 'Подписчик',
                'verbose_name_plural': 'Подписчики',
            },
        ),
    ]
