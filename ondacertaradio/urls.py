from django.urls import path, include
from . import views




urlpatterns = [
    path("", views.index, name = "index" ),
    path("parceiros/", views.parceiros, name = "parceiros" ),
    path("videos/", views.videos, name = "videos" ),
    path("fotos/", views.fotos, name = "fotos" ),
    path('subscribe/', views.newsletter, name="subscribe"),
    path('noticia/<int:noticia_id>', views.noticia, name="noticia"),
    path('noticias/', views.noticias, name="noticias"),
    
]
