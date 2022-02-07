window.onload = function () {
    let dataList = [{
        img: '第一张图片',
        title: 'xx电影网',
        content: '可以自己抓抓看的新资源影片名字',
        url: 'http://www.sina.com.cn',
        like: '12332',
        unlike: '322'
    }, {
        img: '第二张图片',
        title: 'xxx电影网',
        content: '可以自己抓抓看的新资源影片名字',
        url: 'http//:www.sina.com.cn',
        like: '234',
        unlike: '555'
    }, {
        img: '第三张图片',
        title: 'xxxx电影网',
        content: '可以自己抓抓看的新资源影片名字',
        url: 'http//:www.sina.com.cn',
        like: '456456',
        unlike: '456'
    }, {
        img: '第四张图片',
        title: 'xxxxx电影网',
        content: '可以自己抓抓看的新资源影片名字',
        url: 'http//:www.sina.com.cn',
        like: '84345',
        unlike: '453'
    }, {
        img: '第五张图片',
        title: 'xxxxxxx电影网',
        content: '可以自己抓抓看的新资源影片名字',
        url: 'http//:www.sina.com.cn',
        like: '34566',
        unlike: '44332'
    }, {
        img: '第六张图片',
        title: 'xx电影网',
        content: '可以自己抓抓看的新资源影片名字',
        url: 'http//:www.sina.com.cn',
        like: '3455',
        unlike: '22333'
    }]

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
                                <i class="iconfont icon-like">
                                    <span class="a">喜欢</span>
                                    <span class="b">${ele.like}</span>
                                </i>
                            </div>
                            <div class="starUnlike">
                                <i class="iconfont icon-dislike">
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

// function addElementDiv(object) {
//     let dataList = [{
//         img: '第一张图片',
//         title: 'xx电影网',
//         content: '可以自己抓抓看的新资源影片名字',
//         url: 'http:www.sina.com.cn',
//         like: '12332',
//         unlike: '322'
//     }, {
//         img: '第二张图片',
//         title: 'xx电影网',
//         content: '可以自己抓抓看的新资源影片名字',
//         url: 'http:www.sina.com.cn',
//         like: '12332',
//         unlike: '322'
//     }, {
//         img: '第三张图片',
//         title: 'xx电影网',
//         content: '可以自己抓抓看的新资源影片名字',
//         url: 'http:www.sina.com.cn',
//         like: '12332',
//         unlike: '322'
//     }, {
//         img: '第四张图片',
//         title: 'xx电影网',
//         content: '可以自己抓抓看的新资源影片名字',
//         url: 'http:www.sina.com.cn',
//         like: '12332',
//         unlike: '322'
//     }, {
//         img: '第无张图片',
//         title: 'xx电影网',
//         content: '可以自己抓抓看的新资源影片名字',
//         url: 'http:www.sina.com.cn',
//         like: '12332',
//         unlike: '322'
//     }, {
//         img: '第六张图片',
//         title: 'xx电影网',
//         content: '可以自己抓抓看的新资源影片名字',
//         url: 'http:www.sina.com.cn',
//         like: '12332',
//         unlike: '322'
//     }]
//
//     let divs = document.getElementsByClassName('contentright');
//     for (let i in dataList) {
//         let ele = dataList[i];
//         let div = document.createElement('<div class="siteshow">\n' +
//             '                        <div class="siteImg">' + ele.img + '</div>\n' +
//             '                        <div class="siteDetails">\n' +
//             '                            <li class="siteName">\n' +
//             '                                <a>' + ele.title + '</a>\n' +
//             '                            </li>\n' +
//             '                            <li class="siteUrl">\n' +
//             '                                <a href="' + ele.url + '">' + ele.url + '</a>\n' +
//             '                            </li>\n' +
//             '                            <li class="siteDescription">\n' +
//             '                                <a>' + ele.content + '</a>\n' +
//             '                            </li>\n' +
//             '                        </div>\n' +
//             '                        <div class="siteStar">\n' +
//             '                            <div class="starLike">\n' +
//             '                                <i class="iconfont icon-like">\n' +
//             '                                    <span>喜欢</span>\n' +
//             '                                    <span>' + ele.like + '</span>\n' +
//             '                                </i>\n' +
//             '                            </div>\n' +
//             '                            <div class="starUnlike">\n' +
//             '                                <i class="iconfont icon-dislike">\n' +
//             '                                    <span>不喜欢</span>\n' +
//             '                                    <span>' + ele.unlike + '</span>\n' +
//             '                                </i>\n' +
//             '                            </div>\n' +
//             '                        </div>\n' +
//             '\n' +
//             '                    </div>')
//
//     }
//
// }