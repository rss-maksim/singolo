(function () {
    window.addEventListener('DOMContentLoaded', domReady);
    window.addEventListener("hashchange", onHashChanged, false);

    function domReady(event) {
        changeActiveNavItem(event.target.location.hash.slice(1));

        document.querySelector('.tags-container').addEventListener('click', onPortfolioTagClicked);
        document.querySelector('.gallery').addEventListener('click', onPortfolioImageClicked);
        document.querySelector('.arrow.arrow-left').addEventListener('click', onArrowLeftClicked);
        document.querySelector('.arrow.arrow-right').addEventListener('click', onArrowRightClicked);
        document.getElementById('contact-form').addEventListener('submit', onFormSubmitted);

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

    function onArrowLeftClicked(event) {
        console.log(event)
    }

    function onArrowRightClicked(event) {
        console.log(event)
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

    function onFormSubmitted(event) {
        event.preventDefault();
        const elements = event.target.elements;
        const form = {};
        for (let i = 0; i < elements.length; i++) {
            form[elements[i].name] = elements[i].value;
        }
        const message = `Письмо отправлено\n${form.subject === 'Singolo' ? 'Тема: Singolo' : 'Без темы'}\n${form.description === 'Portfolio project' ? 'Описание: Portfolio project' : 'Без описания'}`;
        alert(message);
    }

    function getImagesRow(classList) {
        return classList.contains('web-design') ? 1 : classList.contains('graphic-design') ? 2 : classList.contains('artwork') ? 3 : 0;
    }
})();
