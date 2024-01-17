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

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".you-should-know-carousel", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".you-should-know-chevron-right",
      prevEl: ".you-should-know-chevron-left",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Add event listener to the form to change the active slide
  var carouselSelectorForm = document.getElementById("carouselSelectorForm");
  carouselSelectorForm.addEventListener("change", function (event) {
    var selectedValue = event.target.value;
    if (selectedValue) {
      swiper.slideTo(selectedValue - 1); // Swiper uses zero-based index
    }
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