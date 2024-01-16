document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.you-should-know-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Add event listener to the form to change the active slide
    var carouselSelectorForm = document.getElementById('carouselSelectorForm');
    carouselSelectorForm.addEventListener('change', function (event) {
        var selectedValue = event.target.value;
        if (selectedValue) {
            swiper.slideTo(selectedValue - 1); // Swiper uses zero-based index
        }
    });
});
