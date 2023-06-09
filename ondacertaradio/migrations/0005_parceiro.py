# Generated by Django 4.2.1 on 2023-05-14 14:24

from django.db import migrations, models
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('ondacertaradio', '0004_alter_pessoa_foto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Parceiro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagem', stdimage.models.StdImageField(force_min_size=False, upload_to='static/parceiros/', variations={'thumbnail': {'height': 120, 'width': 220}})),
                ('nome', models.CharField(max_length=200)),
                ('link', models.CharField(blank=True, max_length=200)),
            ],
        ),
    ]
