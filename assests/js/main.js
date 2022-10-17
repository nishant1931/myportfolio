const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

// SHOW MENU WHEN CLICK ON APP ICON
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// CLOSE MENU WHEN CLICK ON CLOSE ICON
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ************    ACCRODION SKILLS DROP DOWN  *************
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills-close";
  }

  if (itemClass === "skills_content skills-close") {
    this.parentNode.className = "skills_content skills-open";
  }
}

skillsHeader.forEach((el) => el.addEventListener("click", toggleSkills));

// ************    QUALIFICATION TABS  *************
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

// ********         ACTIVE MODAL     ***************
const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// SWIPER JS

let swiper = new Swiper(".portfolio_container", {
  slidesPerView: 1,
  spaceBetween: 30,
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

// CHANGE MENU HEADER ON SCROLL

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY > 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON    ****************
function scrollUp() {
  const scrollTop = document.getElementById("scroll-up");

  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

// *****    DARK / LIGHT THEME    *****************

// const themeButton = document.getElementById("theme-button");
// const sunIcon = document.getElementsByClassName("sun_icon");
// const moonIcon = document.getElementsByClassName("moon_icon");
// const darkTheme = "dark-theme";
// const iconTheme = "fa-sun-o";

// // PREVIOUSLY SELECTED THEME
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";

// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "fa-moon-o" : "fa-sun-o";

// if (selectedTheme) {
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "fa-moon-o" ? "add" : "remove"](
//     iconTheme
//   );
// }

// themeButton.addEventListener("click", () => {
//   // Add or remove the theme icon
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // WE SAVE THE THEME AND CURRENT ICON THAT USER CHOSE
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });

// ACTIVE LINK ON SCROLL    *****************

// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;
//   console.log(scrollY);

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute("id");
//     console.log(sectionId);
//     console.log(
//       document
//         .querySelector(".nav_menu a[href*=" + sectionId + "]")
//         .classList.add("active-link")
//     );
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       console.log(
//         document
//           .querySelector(".nav_menu a[href*=" + sectionId + "]")
//           .classList.add("active-link")
//       );
//       console.log("TRUE");
//     } else {
//       console.log(
//         document
//           .querySelector(".nav_menu a[href*=" + sectionId + "]")
//           .classList.remove("active-link")
//       );
//       console.log("FALSE");
//     }
//   });
// }

// window.addEventListener("scroll", scrollActive);
