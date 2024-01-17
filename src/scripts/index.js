"use strict";
// JavaScript Document

// Responsive Menu - Dropdown
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.you-should-know-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.you-should-know-chevron-right',
            prevEl: '.you-should-know-chevron-left',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Add event listener to the form to change the active slide
    var carouselSelectorForm = document.getElementById('carouselSelectorForm');

    // Function to update the active radio button based on the current slide index
    function updateActiveRadioButton() {
        var activeIndex = swiper.activeIndex;
        var radioButton = document.getElementById('ysk-carousel-item-' + (activeIndex + 1));
        if (radioButton) {
            radioButton.checked = true;
        }
    }

    // Initial update when the page loads
    updateActiveRadioButton();

    // Update on Swiper slide change
    swiper.on('slideChange', function () {
        updateActiveRadioButton();
    });

    // Add event listener to the form to change the active slide
    carouselSelectorForm.addEventListener('change', function (event) {
        var selectedValue = event.target.value;
        if (selectedValue) {
            swiper.slideTo(selectedValue - 1); // Swiper uses zero-based index
        }
    });

    // Disable swiping for screens larger than 1162px
    function toggleSwiping() {
        var shouldDisableSwiping = window.innerWidth >= 1162;
        if (shouldDisableSwiping) {
            swiper.wrapperEl.classList.add('swiper-no-swiping');
        } else {
            swiper.wrapperEl.classList.remove('swiper-no-swiping');
        }
    }

    // Initial call to set swiping state
    toggleSwiping();

    // Listen for window resize events to update swiping state
    window.addEventListener('resize', toggleSwiping);
});
