"use strict";function disableScroll(){var e=window.scrollY;document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}function enableScroll(){var e=parseInt(document.body.dataset.position,10);document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:e,left:0}),document.body.removeAttribute("data-position")}var burger=document.querySelector(".burger"),menu=document.querySelector(".menu");burger.addEventListener("click",(function(){burger.classList.toggle("burger--active"),menu.classList.toggle("menu--active"),burger.classList.contains("burger--active")?disableScroll():enableScroll()}));var swiper=new Swiper(".certificates__swiper-wrapper",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,pagination:{el:".certificates__swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),btns=document.querySelectorAll(".contacts__btn"),modalOverlay=document.querySelector(".contacts__modal-overlay"),modalThxOverlay=document.querySelector(".contacts__modal-thx-overlay"),modals=document.querySelectorAll(".contacts__modal"),modalsThx=document.querySelectorAll(".contacts__modal-thx"),closeBtn=document.querySelector(".contacts-modal__close-btn"),thxCloseBtn=document.querySelector(".thx__close-btn"),thxCloseBtnCon=document.querySelector(".contact-modal-thx__close-btn"),thxBackBtn=document.querySelector(".thx__btn");function tnksfun(){document.querySelector("body").classList.contains("contacts-page")?(document.querySelector(".contacts__modal-thx").classList.toggle("contacts__modal-thx--visible"),document.querySelector(".contacts__modal-thx-overlay").classList.toggle("contacts__modal-thx-overlay--visible"),document.querySelector(".contacts__modal").classList.remove("contacts__modal--visible"),document.querySelector(".contacts__modal-overlay").classList.remove("contacts__modal-overlay--visible")):document.querySelector("body").classList.contains("home-page")&&(document.querySelector(".contacts__modal-thx").classList.toggle("contacts__modal-thx--visible"),document.querySelector(".contacts__modal-thx-overlay").classList.toggle("contacts__modal-thx-overlay--visible"),document.querySelector(".home-page").classList.add("home-page-lock"),thxCloseBtnCon.addEventListener("click",(function(e){document.querySelector(".contacts__modal-thx").classList.remove("contacts__modal-thx--visible"),document.querySelector(".contacts__modal-thx-overlay").classList.remove("contacts__modal-thx-overlay--visible"),document.querySelector(".home-page").classList.remove("home-page-lock")})),thxBackBtn.addEventListener("click",(function(e){document.querySelector(".contacts__modal-thx").classList.remove("contacts__modal-thx--visible"),document.querySelector(".contacts__modal-thx-overlay").classList.remove("contacts__modal-thx-overlay--visible"),document.querySelector(".home-page").classList.remove("home-page-lock")})),modalThxOverlay.addEventListener("click",(function(e){console.log(e.target),e.target==modalThxOverlay&&(modalThxOverlay.classList.remove("contacts__modal-thx-overlay--visible"),modalsThx.forEach((function(e){e.classList.remove("contacts__modal-thx--visible"),document.querySelector(".home-page").classList.remove("home-page-lock")})))})))}document.querySelector("body").classList.contains("contacts-page")&&btns.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.getAttribute("data-path");modals.forEach((function(e){e.classList.remove("contacts__modal--visible")})),modalsThx.forEach((function(e){e.classList.remove("contacts__modal-thx--visible")})),document.querySelector('[data-target="'.concat(t,'"]')).classList.add("contacts__modal--visible"),modalOverlay.classList.add("contacts__modal-overlay--visible"),document.querySelector(".contacts-page").classList.add("contacts-page-lock")})),modalOverlay.addEventListener("click",(function(e){console.log(e.target),e.target==modalOverlay&&(modalOverlay.classList.remove("contacts__modal-overlay--visible"),modals.forEach((function(e){e.classList.remove("contacts__modal--visible"),document.querySelector(".contacts-page").classList.remove("contacts-page-lock")})))})),modalThxOverlay.addEventListener("click",(function(e){console.log(e.target),e.target==modalThxOverlay&&(modalThxOverlay.classList.remove("contacts__modal-thx-overlay--visible"),modalsThx.forEach((function(e){e.classList.remove("contacts__modal-thx--visible"),document.querySelector(".contacts-page").classList.remove("contacts-page-lock")})))})),closeBtn.addEventListener("click",(function(e){document.querySelector(".contacts__modal").classList.toggle("contacts__modal--visible"),document.querySelector(".contacts__modal-overlay").classList.toggle("contacts__modal-overlay--visible"),document.querySelector(".contacts-page").classList.remove("contacts-page-lock")})),thxCloseBtn.addEventListener("click",(function(e){document.querySelector(".contacts__modal-thx").classList.toggle("contacts__modal-thx--visible"),document.querySelector(".contacts__modal-thx-overlay").classList.toggle("contacts__modal-thx-overlay--visible"),document.querySelector(".contacts-page").classList.remove("contacts-page-lock")})),thxBackBtn.addEventListener("click",(function(e){document.querySelector(".contacts__modal-thx").classList.toggle("contacts__modal-thx--visible"),document.querySelector(".contacts__modal-thx-overlay").classList.toggle("contacts__modal-thx-overlay--visible"),document.querySelector(".contacts-page").classList.remove("contacts-page-lock")}))}));swiper=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.querySelector("body").classList.contains("home-page")?(console.log("это главная страница"),document.querySelector(".menu__link").classList.remove("menu-link-hover--active"),document.querySelector(".menu__link--home").classList.add("menu-link-hover--active")):document.querySelector("body").classList.contains("gallery-page")?(console.log("это галерея страница"),document.querySelector(".menu__link").classList.remove("menu-link-hover--active"),document.querySelector(".menu__link--gallery").classList.add("menu-link-hover--active")):document.querySelector("body").classList.contains("projects-page")?(console.log("это project страница"),document.querySelector(".menu__link").classList.remove("menu-link-hover--active"),document.querySelector(".menu__link--projects").classList.add("menu-link-hover--active")):document.querySelector("body").classList.contains("certificates-page")?(console.log("это certificates страница"),document.querySelector(".menu__link").classList.remove("menu-link-hover--active"),document.querySelector(".menu__link--certificate").classList.add("menu-link-hover--active")):document.querySelector("body").classList.contains("contacts-page")&&(console.log("это contacts страница"),document.querySelector(".menu__link").classList.remove("menu-link-hover--active"),document.querySelector(".menu__link--contacts").classList.add("menu-link-hover--active"));var scrollableElement=document.body;function checkScrollDirection(e){checkScrollDirectionIsUp(e)?document.querySelector(".header").classList.remove("header-hidden"):document.querySelector(".header").classList.add("header-hidden")}function checkScrollDirectionIsUp(e){return e.wheelDelta?e.wheelDelta>0:e.deltaY<0}scrollableElement.addEventListener("wheel",checkScrollDirection);var selector=document.querySelectorAll('input[type="tel"]'),im=new Inputmask("+7 (999) 999-99-99");im.mask(selector);var selector2=document.querySelector('input[type="tel"]');selector2.addEventListener("input",(function(){console.log(selector2.value);console.log(selector2.value.match(/[0-9]/g).length),console.log(selector2.value.replace(/[0-9]/g,"0"))}));var fileInput=document.querySelector('input[type="file"]');fileInput.addEventListener("change",(function(e){var t=e.currentTarget.files;console.log(t),t.length?fileInput.closest("label").querySelector("span").textContent=t[0].name:fileInput.closest("label").querySelector("span").textContent="Прикрепить файл"}));var validateForms=function(e,t,o,c){new window.JustValidate(e,{rules:t,submitHandler:function(e){var t=new FormData(e),o=new XMLHttpRequest;o.onreadystatechange=function(){4===o.readyState&&200===o.status&&console.log("Отправлено")},o.open("POST","mail.php",!0),o.send(t),e.reset(),tnksfun(),fileInput.closest("label").querySelector("span").textContent="Прикрепить файл"}})};validateForms(".form",{email:{required:!0,email:!0},tel:{required:!0},message:{required:!0},acce:{required:!0}},".thanks-popup","send goal");