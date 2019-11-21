$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    margin: 10,
    autoWidth: true,
    center: true,
    loop: true,
    items: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
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
    document.getElementById("letter").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("container").style.background = "black";
    logo.style.transform = " translate(0px)";
    button.style.transform = " translate(0px)";
  } else if (currentScrollPos < 1) {
    document.getElementById("letter").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("container").style.background = "black";
    logo.style.transform = " translate(0px)";
    button.style.transform = " translate(0px)";
  } else {
    document.getElementById("letter").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("container").style.background = "none";

    logo.style.transform = "translate(-20px,-20px)";
    logo.style.transitionDuration = ".5s";
    button.style.transform = "translate(20px,-20px)";
    button.style.transitionDuration = ".5s";
  }
  prevScrollpos = currentScrollPos;
};
