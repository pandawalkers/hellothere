/*
* 导航列表显示
* */
function guideShow() {
    let guideShow = document.querySelector('.list');
    if (guideShow.style.visibility === 'visible') {
        guideShow.style.maxHeight = '0px'
        guideShow.style.overflow = 'hidden'
        guideShow.style.transition = '1s'
        guideShow.style.visibility = 'hidden'
    } else {
        guideShow.style.maxHeight = '800px'
        guideShow.style.transition = '1s'
        guideShow.style.overflow = 'hidden'
        guideShow.style.visibility = 'visible'
    }
}
