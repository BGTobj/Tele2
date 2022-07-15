const slider = tns({
    container: '.timetable__carousel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

const slider2 = tns({
    container: '.speakers__carousel',
    items: 3,
    slideBy: 'page',
    mode: "gallery",
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev_big').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next_big').addEventListener('click', function () {
    slider.goTo('next');
});

$(document).ready(function() {
    $('.spoiler__title').click(function(event) {
        $(this).toggleClass('active');
        $(this).parents('.spoiler__item').toggleClass('active').find('.spoiler__text').slideToggle(300);
    });
});