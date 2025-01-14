 let mybutton = document.getElementById("myBtn");
    
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 function topFunction() {
   document.body.scrollTop = 0; // Safari
   document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
 } 