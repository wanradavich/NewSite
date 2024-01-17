"use strict";
// JavaScript Document

// Responsive Menu - Dropdown
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-item");
const searchbar = document.querySelector(".searchbar-container");
const searchbarIcon = document.querySelector("#searchbar-icon");
const cancel = document.querySelector("#cancel-button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  searchbar.classList.toggle("active");
  searchbarIcon.classList.toggle("inactive");
});
// hamgburger.addEventListener("click", () => {
//   if(navMenu.classList.contains("active")){
//     if(searchbar.classList.contains("active")){
      
//     }
//   }
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
//   searchbar.classList.toggle("active");
//   searchbarIcon.classList.toggle("inactive");
// });

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    searchbar.classList.remove("active");
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.you-should-know-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.you-should-know-chevron-right',
            prevEl: '.you-should-know-chevron-left',
        },
        breakpoints: {
            1162: {
              slidesPerView: 'auto', // Display as many slides as possible without swiping
            },
        }
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
/*
    // Disable swiping for screens larger than 1162px
    function toggleSwiping() {
        var shouldDisableSwiping = window.innerWidth > 1162;
        if (shouldDisableSwiping) {
            swiper.wrapperEl.classList.add('swiper-no-swiping');
        } else {
            swiper.wrapperEl.classList.remove('swiper-no-swiping');
        }
    }

    // Initial call to set swiping state
    toggleSwiping();

    // Listen for window resize events to update swiping state
    window.addEventListener('resize', toggleSwiping);*/
});
searchbarIcon.addEventListener("click", () => {
  searchbar.classList.toggle("active");
  searchbarIcon.classList.toggle("inactive");
});
cancel.addEventListener("click", () => {
  searchbar.classList.toggle("active");
  searchbarIcon.classList.toggle("inactive");
});

// Video Script

// cycle through videos 

function playVideo(videoUrl, title, description) {
    var mainVideoIframe = document.querySelector('.main-video iframe');
    var mainTitleElement = document.querySelector('.video-info .info-left .title');
    var mainDescriptionElement = document.querySelector('.video-info .info-right .description');

    // Save the current main video details
    var currentMainVideoUrl = mainVideoIframe.src;
    var currentMainTitle = mainTitleElement.textContent;
    var currentMainDescription = mainDescriptionElement.textContent;

    // Set the clicked suggested video as the main video
    mainVideoIframe.src = videoUrl;
    mainTitleElement.textContent = title;
    mainDescriptionElement.textContent = description;

    // Update the clicked suggested video with the details of the current main video
    var clickedVideo = event.currentTarget;
    var clickedThumbnail = clickedVideo.querySelector('.thumbnail');
    var clickedTitle = clickedVideo.querySelector('.title');

    clickedThumbnail.style.backgroundImage = 'url(THUMBNAIL_FOR_CURRENT_MAIN_VIDEO)';
    clickedTitle.textContent = currentMainTitle; 
  }






function playVideo(videoUrl, title, description) {
    var mainVideoIframe = document.querySelector('.main-video iframe');
    var titleElement = document.querySelector('.video-info .info-left .title');
    var descriptionElement = document.querySelector('.video-info .info-right .description');

    mainVideoIframe.src = videoUrl;
    titleElement.textContent = title;
    descriptionElement.textContent = description;
  }


