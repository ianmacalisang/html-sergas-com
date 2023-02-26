$(document).ready(function () {
  var path = window.location.pathname;

  function loadStatic() {
    $("#headerContainer").load("./partials/header.html");
    $("#footerContainer").load("./partials/footer.html");
  }
  function getViews(URI) {
    if (URI == "/") {
      $("title").html("Home | Sergas Group of Companies");
      $("#viewsContainer").load("./views/home.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/home/nav-menu.html");
      }, 500);
    } else if (URI == "/business") {
      $("title").html("For Business | Sergas Group of Companies");
      $("#viewsContainer").load("./views/business.html");
      setTimeout(function () {
        $("#business-cta").load("./partials/business-cta.html");
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
      }, 500);
    } else if (URI == "/about") {
      $("title").html("About Us | Sergas Group of Companies");
      $("#viewsContainer").load("./views/about.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 500);
    } else if (URI == "/contact") {
      $("title").html("Contact Us | Sergas Group of Companies");
      $("#viewsContainer").load("./views/contact.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/contact/nav-menu.html");
      }, 500);
    } else {
      alert("Page Not Found");
    }
  }
  function getActive(URI) {
    setTimeout(function () {
      if (URI == "/") {
        $(".homeLink").addClass("active");
      } else if (URI == "/business") {
        $(".businessLink").addClass("active");
      } else if (URI == "/about") {
        $(".aboutLink").addClass("active");
      } else if (URI == "/contact") {
        $(".contactLink").addClass("active");
      }
    }, 300);
  }
  loadStatic();
  getViews(path);
  getActive(path);
});
