# Generated by Django 4.2.1 on 2023-05-15 08:07

from django.db import migrations
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('ondacertaradio', '0012_alter_video_imagem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='imagem',
            field=stdimage.models.StdImageField(force_min_size=False, upload_to='static/videothumbs/', variations={}),
        ),
    ]
