

var swiper = new Swiper(".mySwiper", {
    loop: true,
    initialSlide: 5,
    speed: 3000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});