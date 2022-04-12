$(document).ready(function(){
    $('.slider').slick({
       dots:true,
    });
 });

 function switchDisplayByClick(trigger, object, newValue) {
   trigger.addEventListener('click', function() {
     document.getElementById(object).style.display = newValue
   });
 };
 
 let buttons = Array.from(document.querySelectorAll('.slider .submit-button'));
 for (index = 0, len = buttons.length; index < len; ++index) {
   switchDisplayByClick(buttons[index], "pop-up-menu", "flex");
 }
 
 let closeMenuButton = document.getElementById("pop-up-menu-close-button");
 switchDisplayByClick(closeMenuButton, "pop-up-menu", "none");

 let openBurgerButton = document.getElementById('burger-open-button');
 switchDisplayByClick(openBurgerButton, 'header-container', 'block');

 let closeBurgerButton = document.getElementById('header-close-button');
 switchDisplayByClick(closeBurgerButton, 'header-container', 'none');

