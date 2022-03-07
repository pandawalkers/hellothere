from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from stone import models
import json


# Create your views here.

# def index(request):
#     html = '<h1 style="color:blue">hahahha</h1>'
#     return HttpResponse(html)
# return render(request, 'homeStone.html')


def myStone(request):
    return render(request, 'homeStone.html')
    # return render(request, 'homeStone.html', context=contents)


def myMovie(request):
    movie_list = models.Moviesite.objects.all()
    # movie = models.Moviesite.objects.all()
    # movie_list = serializers.serialize('json', movie)
    # tmp_list = {'movie_list': movie_list}
    # list = json.dumps(tmp_list)
    return render(request, 'movie.html', {'movie_list': list(movie_list)})
    # print(movie_list)
    # return render(request, 'movie.html', {'movie_list': json.dumps(movie_list)})

def myTest(request):
    movie_list = models.Moviesite.objects.all()
    return render(request, 'movie.html', {'movie_list': movie_list})

# def page_not_found(request: object, exception):
#     return render(request, template_name='404.html')


# def test():
#     pass
