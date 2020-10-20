let hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
let mobile_menu = document.querySelector('.header .navbar .nav-list ul');
let header = document.querySelector('.header.container')

hamburger.addEventListener("click", function(){
   hamburger.classList.toggle('active');
   mobile_menu.classList.toggle('active');
});
 document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 130){
       header.style.backgroundColor = '#29323c';
       header.style.boxShadow = '0px 0px 20px 2px rgba(0, 0, 0, 0.459)';
    }
    else{
      header.style.backgroundColor = "transparent";
   }
 })