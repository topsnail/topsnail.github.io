function createBSZ() {
    var postBody = document.getElementById('postBody');
    if (postBody){
        postBody.insertAdjacentHTML('afterend','<div id="busuanzi_container_page_pv" style="float:left;margin-top:8px;font-size:small;">本文浏览量<span id="busuanzi_value_page_pv"></span>次</div>');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    createBSZ();
    if (!document.getElementById('postBody')) return;
    var element = document.createElement('script');
    element.src = 'https://vercount.one/js';
    element.defer = true;
    document.head.appendChild(element);
});
