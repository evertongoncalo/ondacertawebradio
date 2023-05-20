from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Pessoa, Parceiro, Video, Noticia,Desporto, Foto
from .forms import Newsletter
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_protect


@csrf_protect
def newsletter(request):
    if request.method != 'POST':
        novoemail = Newsletter()
    else:
        novoemail = Newsletter(data=request.POST)
        if novoemail.is_valid():
            novoemail.save()
            messages.success(request,"E-mail salvo com sucesso")
            return redirect("/#contacto")
        else:
            messages.error(request,"E-mail NÃO salvo")


def index(request):
    
    fotos =  Foto.objects.all()   
    pessoas = Pessoa.objects.all()
    parceiros = Parceiro.objects.all()
    videos = Video.objects.all()
    desportos = Desporto.objects.all()
    noticias = Noticia.objects.order_by('-data_adicao')
    context = {'pessoas': pessoas,
               'parceiros': parceiros,
               'videos': videos,
               'noticias': noticias,
               'desportos': desportos,
               'fotos': fotos,
               }
    return render(request, 'index.html', context)

def parceiros(request):
    parceiros = Parceiro.objects.all()
    context = {'parceiros': parceiros}    
    return render(request, 'parceiros.html', context)

def videos(request):
    videos = Video.objects.all()
    
    videos_pag = Paginator(videos,6)
    page_num = request.GET.get('page')
    page = videos_pag.get_page(page_num)
    
    context = {'page': page}    
    return render(request, 'videos.html', context)


def fotos(request):
    fotos = Foto.objects.all()
    context = {'fotos': fotos}    
    return render(request, 'galeria.html', context)


def noticia(request, noticia_id):
    noticia = Noticia.objects.get(id=noticia_id)
    
    url_facebook = f"https://www.facebook.com/sharer/sharer.php?u={request.build_absolute_uri()}"
    url_twitter = f"https://twitter.com/intent/tweet?url={request.build_absolute_uri()}&text={noticia.titulo}"
    url_linkedin = f"https://www.linkedin.com/shareArticle?url={request.build_absolute_uri()}&title={noticia.titulo}"

    
    context = {'noticia': noticia, 
               'noticia_id': noticia_id,
               'url_facebook': url_facebook,
               'url_twitter': url_twitter,
               'url_linkedin': url_linkedin,
               
               }
    return render(request, 'noticia.html', context)

def noticias(request):
     noticias = Noticia.objects.order_by('-data_adicao')
     
     noticias_pag = Paginator(noticias,20)
     page_num = request.GET.get('page')
     page = noticias_pag.get_page(page_num)
     
     context = {'page':page,}
     return render(request, 'noticias.html', context)
    




