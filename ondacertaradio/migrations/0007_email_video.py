# Generated by Django 4.2.1 on 2023-05-15 07:28

from django.db import migrations, models
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('ondacertaradio', '0006_alter_pessoa_foto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('texto', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagem', stdimage.models.StdImageField(force_min_size=False, upload_to='static/videothumbs/', variations={'thumbnail': {'height': 200, 'width': 380}})),
                ('titulo', models.CharField(max_length=200)),
                ('descricao', models.CharField(blank=True, max_length=200)),
                ('link', models.CharField(max_length=200)),
            ],
        ),
    ]
