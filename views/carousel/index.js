const carousel_wrap = document.querySelector('.carousel-wrap');
const carousel_list = carousel_wrap.querySelector('.carousel-list');
const carousel_button = carousel_wrap.querySelector('.carousel-button');
const carousel_button_arrow = carousel_button.querySelectorAll('.arrow-button');

let click_flag = false;

carousel_button.addEventListener('click', function (event) {
    if (click_flag) return;
    click_flag = true;

    let carousel_item = carousel_list.querySelectorAll('.carousel-item');

    if (event.target.classList.contains('arrow-right')) {
        carousel_list.appendChild(carousel_item[0]);
    } else if (event.target.classList.contains('arrow-left')) {
        carousel_list.prepend(carousel_item[carousel_item.length - 1]);
    }

    setTimeout(() => {
        click_flag = false;
    }, 1200);
});

setInterval(() => {
    carousel_button_arrow[1].click();
}, 3000);

// document.documentElement.style.setProperty;
// document.documentElement.style.getPropertyValue;
