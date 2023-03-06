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
    } else if (URI == "/business/") {
      $("title").html("For Business | Sergas Group of Companies");
      $("#viewsContainer").load("./views/business.html");
      setTimeout(function () {
        $("#business-cta").load("./partials/business-cta.html");
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
      }, 500);
    }

    // start loading all about inner pages
    else if (URI == "/about/message-from-management/") {
      $("title").html(
        "About Us | Message From Management | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/inner/about/message.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 500);
    } else if (URI == "/about/why-choose-lpg/") {
      $("title").html("About Us | Choose LPG | Sergas Group of Companies");
      $("#viewsContainer").load("./views/inner/about/about-us.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-loader").load("./partials/sectors.html");
      }, 500);
    } else if (URI == "/about/history/") {
      $("title").html("About Us | Our History | Sergas Group of Companies");
      $("#viewsContainer").load("./views/inner/about/history.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 500);
    } else if (URI == "/about/sergas-group-members/") {
      $("title").html(
        "About Us | Our Group Members | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/inner/about/members.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 500);
    } else if (URI == "/about/qhse-policy/") {
      $("title").html("About Us | QHSE Policy | Sergas Group of Companies");
      $("#viewsContainer").load("./views/inner/about/policy.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 500);
    }
    // end loading all about inner pages

    // start loading all about nav-links
    else if (URI == "/about/news-and-media/") {
      $("title").html("About Us | News and Media | Sergas Group of Companies");
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/news-and-media.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/sectors-we-serve/agriculture/") {
      $("title").html(
        "About Us | Sectors We Serve | Agriculture | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/sectors-we-serve/agriculture.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/sectors-we-serve/hotels/") {
      $("title").html(
        "About Us | Sectors We Serve | Hotels | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/sectors-we-serve/hotels.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/sectors-we-serve/labor-camp/") {
      $("title").html(
        "About Us | Sectors We Serve | Labor Camp | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/sectors-we-serve/labor-camp.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/sectors-we-serve/malls/") {
      $("title").html(
        "About Us | Sectors We Serve | Malls | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/sectors-we-serve/malls.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/sectors-we-serve/restaurants/") {
      $("title").html(
        "About Us | Sectors We Serve | Restaurants | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/sectors-we-serve/restaurants.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/sectors-we-serve/hospitals-and-labs/") {
      $("title").html(
        "About Us | Sectors We Serve | Hospitals and Labs | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/sectors-we-serve/hospitals-and-labs.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    }
    // end loading all about nav-links

    // start loading business page nav links

    // end loading business page nav links

    // start loading contact us links
    else if (URI == "/contact-us/") {
      $("title").html(
        "Contact Us | Invest with Sergas | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/contact.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/contact/nav-menu.html");
      }, 500);
    } else if (URI == "/contact-us/leave-a-feedback/") {
      $("title").html(
        "Contact Us | B2B: Leave a Feedback | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/contact/nav-links/leave-a-feedback.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/contact/nav-menu.html");
      }, 500);
    }
    // end loading contact us links
    else {
      alert("Page Not Found");
    }
  }
  function getActive(URI) {
    setTimeout(function () {
      if (URI == "/") {
        $(".homeLink").addClass("active");
      } else if (URI == "/business/") {
        $(".businessLink").addClass("active");
      } else if (
        URI == "/about/why-choose-lpg/" ||
        URI == "/about/news-and-media/" ||
        URI == "/about/sergas-group-members/" ||
        URI == "/about/message-from-management/" ||
        URI == "/about/history/" ||
        URI == "/about/qhse-policy/" ||
        URI == "/about/sectors-we-serve/agriculture/" ||
        URI == "/about/sectors-we-serve/hotels/" ||
        URI == "/about/sectors-we-serve/labor-camp/" ||
        URI == "/about/sectors-we-serve/malls/" ||
        URI == "/about/sectors-we-serve/restaurants/" ||
        URI == "/about/sectors-we-serve/hospitals-and-labs/"
      ) {
        $(".aboutLink").addClass("active");
      } else if (
        URI == "/contact-us/" ||
        URI == "/contact-us/leave-a-feedback/"
      ) {
        $(".contactLink").addClass("active");
      }
    }, 300);
  }
  loadStatic();
  getViews(path);
  getActive(path);
  console.log(path);
});
