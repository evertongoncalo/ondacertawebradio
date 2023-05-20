from django.db import models
from stdimage.models import StdImageField
from PIL import Image
from django import forms 



class Pessoa(models.Model):
    foto = StdImageField(upload_to='static/fotos_pessoa/',variations={'thumbnail': {'width': 300, 'height': 300, 'crop': True}})
    nome = models.CharField(max_length=200)
    instagram = models.CharField(max_length=200, blank=True)
    linkedin = models.CharField(max_length=200, blank=True)
    facebook = models.CharField(max_length=200, blank=True)
    
    def save(self, *args, **kwargs):
        # Redimensionar a imagem antes de salvar
        if self.foto:
            super().save(*args, **kwargs)
            foto = Image.open(self.foto.path)
            foto = foto.resize((300, 300), Image.ANTIALIAS)
            foto.save(self.foto.path)
        else:
            super().save(*args, **kwargs)
    
    
    def __str__(self):
        return f"{self.nome}"
    
class Parceiro(models.Model):
    imagem = StdImageField(upload_to='static/parceiros/')
    nome = models.CharField(max_length=200)
    link = models.CharField(max_length=200, blank=True)
    
    
    def save(self, *args, **kwargs):
        # Redimensionar a imagem antes de salvar
        if self.imagem:
            super().save(*args, **kwargs)
            imagem = Image.open(self.imagem.path)
            imagem = imagem.resize((220, 120), Image.ANTIALIAS)
            imagem.save(self.imagem.path)
        else:
            super().save(*args, **kwargs)   
    
    def __str__(self):
        return f"{self.nome}"
        

class Video(models.Model):
    imagem = StdImageField(upload_to='static/videothumbs/')
    titulo = models.CharField(max_length=200)
    descricao = models.CharField(max_length=400,blank=True)
    link = models.CharField(max_length=200)
    data_adicao = models.DateTimeField(auto_now_add=True)

    
    
    def save(self, *args, **kwargs):
        # Redimensionar a imagem antes de salvar
        if self.imagem:
            super().save(*args, **kwargs)
            imagem = Image.open(self.imagem.path)
            imagem = imagem.resize((380, 220), Image.ANTIALIAS)
            imagem.save(self.imagem.path)
        else:
            super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.titulo}"
    
    
class Noticia(models.Model):
    imagem = StdImageField(upload_to='static/noticiathumbs/')
    titulo = models.CharField(max_length=200)
    texto = models.TextField(blank=True)
    link = models.CharField(max_length=200,blank=True)
    data_adicao = models.DateTimeField(auto_now_add=True)

        
    def save(self, *args, **kwargs):
        # Redimensionar a imagem antes de salvar
        if self.imagem:
            super().save(*args, **kwargs)
            imagem = Image.open(self.imagem.path)
            imagem = imagem.resize((350, 425), Image.ANTIALIAS)
            imagem.save(self.imagem.path)
        else:
            super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.data_adicao} {self.titulo}"
    

class Desporto(models.Model):
    imagem = StdImageField(upload_to='static/desportothumbs/')
    titulo = models.CharField(max_length=100)
    descricao1 = models.CharField(max_length=100,blank=True)
    descricao2 = models.CharField(max_length=100,blank=True)

        
    def save(self, *args, **kwargs):
        # Redimensionar a imagem antes de salvar
        if self.imagem:
            super().save(*args, **kwargs)
            imagem = Image.open(self.imagem.path)
            imagem = imagem.resize((350, 425), Image.ANTIALIAS)
            imagem.save(self.imagem.path)
        else:
            super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.titulo}"
    
    
    
class Email(models.Model):
    email = models.EmailField(max_length=120)
    
    def __str__(self):
        return f" {self.email}"
    
class Foto(models.Model):
    imagem = StdImageField(upload_to='static/fotothumbs/')
    titulo = models.CharField(max_length=200)
    data_adicao = models.DateTimeField(auto_now_add=True)

    
    
    def save(self, *args, **kwargs):
        # Redimensionar a imagem antes de salvar
        if self.imagem:
            super().save(*args, **kwargs)
            imagem = Image.open(self.imagem.path)
            imagem = imagem.resize((500, 500), Image.ANTIALIAS)
            imagem.save(self.imagem.path)
        else:
            super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.titulo}"
    

    