<<<<<<< HEAD
console.log("we out here three");
=======
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    margin: 10,
    autoWidth: true,
    center: true,
    loop: true,
    items: 1
  });
});

let letter = document.getElementById("letter");
let about = document.getElementById("about");
let button = document.getElementById("button");
let logo = document.getElementById("logo");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};
>>>>>>> ft-animation
