
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from django.views.static import serve



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('ondacertaradio.urls')),
    re_path(r'^media/(?P<path>.*)$',serve, {'document_root': settings.MEDIA_ROOT}),
] #+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


admin.AdminSite.site_header = "Onda Certa Web Radio"
admin.AdminSite.site_title = "Onda Certa Web Radio"
