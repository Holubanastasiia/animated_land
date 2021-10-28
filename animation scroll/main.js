const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll(params) {
        for (i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];

            // offsetHeight - содержит полную высоту элемента (включает собственно высоту элемента, высоту границ, padding, полосы прокрутки).
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            //точка когда начинается анимация
            const animStart = 4;
            //window.innerHeight - Высота (в пикселях) области просмотра окна браузера
            //берем всю высоту видимого экрана и отнимаем высоту эл делённую на 4. выходит когда показывается 4я часть эл происходит действие(анимация)
            let animStartPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                //в случае если высота эл выше чем высота видимого эк
                let animStartPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animStartPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains("_anim-no-hide"))
                    animItem.classList.remove("_active");
            }

        }
    }
    //получить расстояние от верха страницы до шапки const rect = el.getBoundingClientRect(), затем прибавить к этим координатам значение скроллинга
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300)

}