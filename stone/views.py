from django.shortcuts import render


# Create your views here.

# def index(request):
#     html = '<h1 style="color:blue">hahahha</h1>'
#     return HttpResponse(html)
# return render(request, 'homeStone.html')


def myStone(request):
    # html = '<h1 style="color:red">hahahha</h1>'
    # contents = {'title': '这是我的主页'}
    # return HttpResponse(html)
    return render(request, 'homeStone.html')
    # return render(request, 'homeStone.html', context=contents)


# def page_not_found(request: object, exception):
#     return render(request, template_name='404.html')


# def test():
#     pass
