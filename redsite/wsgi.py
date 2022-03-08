"""
WSGI config for redsite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""
'''
wsgi是将python服务器程序连接到web服务器的通用协议，通过wsgi里面可以让我们调用application的应用。
'''
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'redsite.settings')

application = get_wsgi_application()
