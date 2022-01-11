//currenly active link in navbar
var btnContainer = document.getElementById("navbarSupportedContent");

var btns = btnContainer.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//smooth scrolling
$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, .order a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//touch to close collapse navbar
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// $(".contactus button").on("click", function (event) {
//   window.alert(
//     "Thank You ! For Contacting Us \nWe Will Get Back To You As Soon As Possible"
//   );
// });



