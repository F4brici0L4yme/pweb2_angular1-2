from django.contrib import admin
from django.urls import path, re_path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from frontend.views import angular_app

urlpatterns = [
    path('admin/', admin.site.urls),
    # ... aquí podrías tener otras rutas de API si las usas
]

# primero las rutas de staticfiles
urlpatterns += staticfiles_urlpatterns()

# al final, cualquier otra URL va a Angular
urlpatterns += [
    re_path(r'^.*$', angular_app, name='angular_app'),
]