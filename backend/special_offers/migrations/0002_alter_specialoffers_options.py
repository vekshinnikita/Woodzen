# Generated by Django 4.1.1 on 2022-09-15 12:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('special_offers', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='specialoffers',
            options={'verbose_name': 'Специальное предложение', 'verbose_name_plural': 'Специальные предложения'},
        ),
    ]