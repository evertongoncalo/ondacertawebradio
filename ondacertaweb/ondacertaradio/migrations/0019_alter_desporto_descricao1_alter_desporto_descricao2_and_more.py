# Generated by Django 4.2.1 on 2023-05-15 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ondacertaradio', '0018_alter_parceiro_imagem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='desporto',
            name='descricao1',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='desporto',
            name='descricao2',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='desporto',
            name='titulo',
            field=models.CharField(max_length=100),
        ),
    ]