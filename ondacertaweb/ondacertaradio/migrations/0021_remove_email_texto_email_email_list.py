# Generated by Django 4.2.1 on 2023-05-15 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ondacertaradio', '0020_alter_video_descricao'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='email',
            name='texto',
        ),
        migrations.AddField(
            model_name='email',
            name='email_list',
            field=models.TextField(default=2),
            preserve_default=False,
        ),
    ]