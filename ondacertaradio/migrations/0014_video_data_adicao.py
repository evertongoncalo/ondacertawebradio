# Generated by Django 4.2.1 on 2023-05-15 08:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('ondacertaradio', '0013_alter_video_imagem'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='data_adicao',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]