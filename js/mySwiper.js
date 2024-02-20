const trendingSwiper = new Swiper(".trendingCategorySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const newArrivalSwiper = new Swiper(".newArrivalSwiper", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});