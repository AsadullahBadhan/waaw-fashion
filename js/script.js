window.addEventListener('scroll', function () {
    const stickyNav = document.querySelector('.sticky-nav');

    stickyNav.classList.toggle("sticky", window.scrollY > 0);
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});