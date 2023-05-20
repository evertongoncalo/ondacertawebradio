
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('ondacertaradio.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


admin.AdminSite.site_header = "Onda Certa Web Radio"
admin.AdminSite.site_title = "Onda Certa Web Radio"
