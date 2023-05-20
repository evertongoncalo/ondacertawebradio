from django.contrib import admin
from .models import Pessoa, Parceiro, Video, Noticia,Desporto,Email,Foto

class NoticiaAdmin(admin.ModelAdmin):
    list_display = ('data_adicao','titulo')

admin.site.register(Pessoa)
admin.site.register(Parceiro)
admin.site.register(Video)
admin.site.register(Noticia, NoticiaAdmin)
admin.site.register(Desporto)
admin.site.register(Foto)
admin.site.register(Email)





