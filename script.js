(function () {
    window.addEventListener('DOMContentLoaded', domReady);
    window.addEventListener("hashchange", onHashChanged, false);

    function domReady(event) {
        changeActiveNavItem(event.target.location.hash.slice(1))
    }

    function onHashChanged(event) {
        changeActiveNavItem(event.target.location.hash.slice(1))
    }

    function changeActiveNavItem(item) {
        if (!item) {
            return;
        }
        document.querySelector('.nav-item.active').classList.remove('active');
        const link = document.querySelector(`.nav-item>a[href*=${item}]`);
        if (link) {
            link.parentNode.classList.add('active');
        }
    }

})();
