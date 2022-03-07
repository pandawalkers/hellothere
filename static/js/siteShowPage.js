window.onload = function () {

   let dataList = [{
        'img': '第一片',
        'title': '陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈陈xx电影网',
        'content': '可以自己抓抓看的新资源影片名字',
        'url': 'http://www.sina.com.cn',
        'like': '12332',
        'unlike': '322'
    }, {
        'img': '第二张图片dfgdfgdfg',
        'title': 'xxx电影网',
        'content': '可以自己抓抓看的新资源影片名字',
        'url': 'http://www.sina.com.cn',
        'like': '234',
        'unlike': '555'
    }, {
        'img': '第三图片',
        'title': 'xxxx电影网',
        'content': '可以自己抓抓看的新资源影片名字',
        'url': 'http://www.sina.com.cn',
        'like': '456456',
        'unlike': '456'
    }, {
        'img': '第四张图片',
        'title': 'llllx电影网',
        'content': '可以自己抓抓看的新资源影片名字',
        'url': 'http://www.sina.com.cn',
        'like': '84345',
        'unlike': '453'
    }, {
        'img': '第五图片',
        'title': 'xxxxxxx电影网',
        'content': '可以自己抓抓看的新资源影片名字',
        'url': 'http://www.sin.com.cn',
        'like': '34566',
        'unlike': '44332'
    }, {
        'img': '第六张图片kkkkkkk',
        'title': 'xx电影网',
        'content': '可以自己抓抓看的新资源影片名字',
        'url': 'http://www.sina.com.cn',
        'like': '3455',
        'unlike': '22333'
    }];
    // alert(dataList);
    // let dataList = dataList;

    let haha = document.getElementById('haha');
    let divs = '';
    for (let i in dataList) {
        let ele = dataList[i];
        let div = `<div class="siteshow">
                        <div class="siteImg">${ele.img}</div>
                        <div class="siteDetails">
                            <li class="siteName">
                                <a>${ele.title}</a>
                            </li>
                            <li class="siteUrl">
                                <a href="${ele.url}">${ele.url}</a>
                            </li>
                            <li class="siteDescription">
                                <a>${ele.content}</a>
                            </li>
                        </div>
                        <div class="siteStar">
                            <div class="starLike">
                                <i class="iconfont icon-'like'">
                                    <span class="a">喜欢</span>
                                    <span class="b">${ele.like}</span>
                                </i>
                            </div>
                            <div class="starUnlike">
                                <i class="iconfont icon-dis'like'">
                                    <span>不喜欢</span>
                                    <span>${ele.unlike}</span>
                                </i>
                            </div>
                        </div>
                    </div>`

        divs = divs + div;
    }
    haha.innerHTML = divs;
}
