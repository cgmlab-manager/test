document.addEventListener("DOMContentLoaded", function() {
    // 獲取當前網址
    var currentPageUrl = window.location.href;

    // 選擇所有導航鏈接
    var navigationLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // 遍歷導航鏈接並設置活動狀態
    setActiveNavigationLink(navigationLinks, currentPageUrl);
});

function setActiveNavigationLink(links, url) {
    // 遍歷導航鏈接
    links.forEach(function(link) {
        // 比較鏈接的 href 與當前網址
        if (link.href === url) {
            // 如果匹配，則添加 active 類別
            link.classList.add('active');
        }
    });
}
