(function () {
    window.addEventListener('DOMContentLoaded', domReady);
    window.addEventListener("hashchange", onHashChanged, false);

    function domReady(event) {
        changeActiveNavItem(event.target.location.hash.slice(1));

        document.querySelector('.tags-container').addEventListener('click', onPortfolioTagClicked);
        document.querySelector('.gallery').addEventListener('click', onPortfolioImageClicked);

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

    function onPortfolioTagClicked(event) {
        if (!event.target.classList.contains('tag')) {
            return;
        }
        const active = document.querySelector('.tag.active');
        if (active) {
            active.classList.remove('active');
        }
        event.target.classList.add('active');
        const images = document.querySelectorAll('.gallery > .picture');
        const value = getImagesRow(event.target.classList);
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            if (value === 1) {
                if (i > 3) {
                    image.style.display = 'none';
                } else {
                    image.style.display = 'block';
                }
            } else if (value === 2) {
                if (i < 4 || i > 7) {
                    image.style.display = 'none';
                } else {
                    image.style.display = 'block';
                }
            } else if (value === 3) {
                if (i < 8) {
                    image.style.display = 'none';
                } else {
                    image.style.display = 'block';
                }
            } else {
                image.style.display = 'block';
            }
        }
    }

    function onPortfolioImageClicked(event) {
        console.log(event.target)
        const wrapper = event.target.parentNode;
        if (!wrapper.classList.contains('picture')) {
            return;
        }
        const active = document.querySelector('.picture.active');
        if (active) {
            active.classList.remove('active');
        }
        wrapper.classList.add('active');
    }

    function getImagesRow(classList) {
        return classList.contains('web-design')
                ? 1
                : classList.contains('graphic-design')
                ? 2
                : classList.contains('artwork')
                ? 3
                : 0;
    }


})();
