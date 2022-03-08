from django.test import TestCase
import base64
# Create your tests here.


# dataList = [{
#         'img': '第一张图片',
#         'title': 'xx电影网',
#         'content': '可以自己抓抓看的新资源影片名字',
#         'url': 'http://www.sina.com.cn',
#         'like': '12332',
#         'unlike': '322'
#     }, {
#         'img': '第二张图片dfgdfgdfg',
#         'title': 'xxx电影网',
#         'content': '可以自己抓抓看的新资源影片名字',
#         'url': 'http://www.sina.cooooom.cn',
#         'like': '234',
#         'unlike': 666
#     }]


# i = dataList[1].get('unlike')
# print(i)

# for i in dataList:
#     print(i)
#     print(i.get('url'))

# for i in dataList:
#     print(i)
#     print(i.get('url'))

# b'YWxza2ZqaXdlamZsamthc2pkZmxrc2pkZnd3LmJhaWR1LmNvbQ=='
# b'YWxza2ZqaXdlamZsamthc2pkZmxrc2pkZnd3LmJhaWR1LmNvbW1tbQ=='

url = 'alskfjiwejfljkasjdflksjdfww.baidu.commmm'
newUrl = url.encode('utf-8')
result_url = base64.b64encode(newUrl)
print(result_url)
print('')
