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
    const isNavMenuActive = navMenu.classList.contains("active");
    const isSearchBarActive = searchbar.classList.contains("active");

    if (!isNavMenuActive && !isSearchBarActive) {
        // If neither nav menu nor search bar have an active class, give them both an active class
        navMenu.classList.add("active");
        searchbar.classList.add("active");
    } else if (isNavMenuActive && isSearchBarActive) {
        // If both nav menu and search bar have an active class, remove the active class from both
        navMenu.classList.remove("active");
        searchbar.classList.remove("active");
    } else {
        // If search bar has an active class and nav menu does not, or vice versa, give both an active class
        navMenu.classList.add("active");
        searchbar.classList.add("active");
    }

    // Toggle hamburger class
    hamburger.classList.toggle("active");

    // Toggle searchbar icon class
    if (searchbar.classList.contains("active")) {
        searchbarIcon.classList.add("inactive");
    } else {
        searchbarIcon.classList.remove("inactive");
    }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    searchbar.classList.remove("active");
  });
});

searchbarIcon.addEventListener("click", () => {
  searchbar.classList.toggle("active");
  searchbarIcon.classList.toggle("inactive");
});
cancel.addEventListener("click", () => {
  searchbar.classList.toggle("active");
  searchbarIcon.classList.toggle("inactive");
});

function initializeSwiperAndForm(sectionName) {
  var carouselClass = sectionName + '-carousel';
  var nextButtonClass = sectionName + '-chevron-right';
  var prevButtonClass = sectionName + '-chevron-left';
  var formId = sectionName + '-carouselSelectorForm';
  var itemPrefix = sectionName + '-carousel-item';

  // Initialize Swiper
  var swiper = new Swiper('.' + carouselClass, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      navigation: {
          nextEl: '.' + nextButtonClass,
          prevEl: '.' + prevButtonClass,
      },
      breakpoints: {
          1162: {
              slidesPerView: 'auto',
          },
      }
  });

  // Add event listener to the form to change the active slide
  var carouselSelectorForm = document.getElementById(formId);

  // Function to update the active radio button based on the current slide index
  function updateActiveRadioButton() {
      var activeIndex = swiper.activeIndex;
      var radioButton = document.getElementById(itemPrefix + '-' + (activeIndex + 1));
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
}

// Example usage:
document.addEventListener('DOMContentLoaded', function () {
  initializeSwiperAndForm('you-should-know');
  initializeSwiperAndForm('editors-picks');
  initializeSwiperAndForm('news-section-one');
  // You can call this function with different section names for other sections on your page.
});