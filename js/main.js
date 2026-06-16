const mobilNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnInco = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener("click", () => {
    if (mobilNav.classList.contains(navClosedClass)) {
        mobilNav.classList.toggle(navOpenedClass)

        closeBtnInco.classList.toggle(arrowLeftClass)
        closeBtnInco.classList.toggle(arrowRightClass)
    };
});