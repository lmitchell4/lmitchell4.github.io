$(document).ready(function() {
  document.addEventListener("scroll", function() {
    if(window.pageYOffset > 0) {
      $("#header").addClass("header-shadow");
    } else {
      $("#header").removeClass("header-shadow");
    }
  });
})
