# Generated by Django 4.2.1 on 2023-05-15 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ondacertaradio', '0019_alter_desporto_descricao1_alter_desporto_descricao2_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='descricao',
            field=models.CharField(blank=True, max_length=400),
        ),
    ]
