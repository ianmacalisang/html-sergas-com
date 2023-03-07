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
    }

    // load home nav pages
    else if (URI == "/help-and-support/") {
      $("title").html("Home | Help and Support | Sergas Group of Companies");
      $("#viewsContainer").load(
        "./views/inner/home/nav-links/help-and-support.html"
      );
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
        $("#sector-loader").load("./partials/sectors-tab.html");
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
    } else if (URI == "/business/sectors-we-serve/agriculture/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Agriculture | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/agriculture.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/hotels/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Hotels | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/hotels.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/labor-camp/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Labor Camp | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/labor-camp.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/malls/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Malls | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/malls.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/restaurants/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Restaurants | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/restaurants.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/hospitals-and-labs/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Hospitals and Labs | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/hospitals-and-labs.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/universities-and-schools/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Universities and Schools | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/universities-and-schools.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/residential-buildings/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Residential Buildings | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/residential.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/sectors-we-serve/industries/") {
      $("title").html(
        "For Your Business | Sectors We Serve | Industries | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/sectors-we-serve/industries.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#business-cta").load("./partials/business-cta.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    }
    // end loading all about nav-links

    // start loading services page nav links
    else if (URI == "/about/services/emergency-operation-and-maintenance/") {
      $("title").html(
        "About Us | Services | Emergency Operation and Maintenance | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/services/emergency-operation.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#sector-loader").load("./partials/sectors-tab.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/services/gas-meter-billing-and-management/") {
      $("title").html(
        "About Us | Services | Gas Meter Billing and Management | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/services/gas-meter.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#sector-loader").load("./partials/sectors-tab.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/services/gas-supply-and-transportation/") {
      $("title").html(
        "About Us | Services | Gas Supply and Transportation | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/services/gas-supply.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#sector-loader").load("./partials/sectors-tab.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/services/gas-system-design-and-engineering/") {
      $("title").html(
        "About Us | Services | Gas System Design and Engineering | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/services/gas-design.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#sector-loader").load("./partials/sectors-tab.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/about/services/gas-system-engineering/") {
      $("title").html(
        "About Us | Services | Gas System Engineering, Procurement and Construction | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/about/nav-links/services/gas-engineering.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-form-loader").load("./partials/inquiry-form.html");
        $("#sector-loader").load("./partials/sectors-tab.html");
        $("#image-viewer-loader").load("./partials/image-viewer.html");
      }, 500);
    } else if (URI == "/business/firefighting/") {
      $("title").html(
        "For Your Business | Firefighting | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/business/nav-links/firefighting.html"
      );
      setTimeout(function () {
        $(".load-submenu").load(
          "./views/inner/business/nav-menu-firefighting.html"
        );
        $("#firefighting-cta").load("./partials/firefighting-cta.html");
        $(".footer-top-container").addClass("firefighting-footer-bg");
      }, 500);
    }
    // end loading services page nav links

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
    } else if (URI == "/contact-us/locations/") {
      $("title").html("Contact Us | Our Locations | Sergas Group of Companies");
      $("#viewsContainer").load(
        "./views/inner/contact/nav-links/locations.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/contact/nav-menu.html");
        // set map function here
        function loadMap() {
          var map = new Microsoft.Maps.Map($("#myMap")[0], {
            center: new Microsoft.Maps.Location(
              25.187863969324173,
              55.26185619252998
            ),
            zoom: 18,
          });
          addPinToMap(map, 25.187863969324173, 55.26185619252998);
        }

        function addPinToMap(map, latitude, longitude) {
          var pushpin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(latitude, longitude),
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="39"><path d="M15 39C6.716 39 0 30.284 0 20S6.716 1 15 1s15 6.716 15 15-6.716 19-15 19z" fill="#335c92"/><circle cx="15" cy="20" r="8" fill="#fff"/></svg>',
            }
          );
          map.entities.push(pushpin);
        }

        function changeMapPinEvent(event) {
          var map = new Microsoft.Maps.Map($("#myMap")[0], {});
          var latitude = parseFloat($(event.target).data("latitude"));
          var longitude = parseFloat($(event.target).data("longitude"));
          addPinToMap(map, latitude, longitude);
          map.setView({
            center: new Microsoft.Maps.Location(latitude, longitude),
            zoom: 18,
          });
        }

        $(".location-button").on("click", changeMapPinEvent);

        loadMap();
      }, 500);
    }
    // end loading contact us links
    else {
      alert("Page Not Found");
    }
  }
  function getActive(URI) {
    setTimeout(function () {
      if (URI == "/" || URI == "/help-and-support/") {
        $(".homeLink").addClass("active");
      } else if (
        URI == "/business/" ||
        URI == "/business/firefighting/" ||
        URI == "/business/sectors-we-serve/agriculture/" ||
        URI == "/business/sectors-we-serve/hotels/" ||
        URI == "/business/sectors-we-serve/labor-camp/" ||
        URI == "/business/sectors-we-serve/malls/" ||
        URI == "/business/sectors-we-serve/restaurants/" ||
        URI == "/business/sectors-we-serve/hospitals-and-labs/" ||
        URI == "/business/sectors-we-serve/universities-and-schools/" ||
        URI == "/business/sectors-we-serve/residential-buildings/" ||
        URI == "/business/sectors-we-serve/industries/"
      ) {
        $(".businessLink").addClass("active");
      } else if (
        URI == "/about/why-choose-lpg/" ||
        URI == "/about/news-and-media/" ||
        URI == "/about/sergas-group-members/" ||
        URI == "/about/message-from-management/" ||
        URI == "/about/history/" ||
        URI == "/about/qhse-policy/" ||
        URI == "/about/services/emergency-operation-and-maintenance/" ||
        URI == "/about/services/gas-meter-billing-and-management/" ||
        URI == "/about/services/gas-supply-and-transportation/" ||
        URI == "/about/services/gas-system-design-and-engineering/" ||
        URI == "/about/services/gas-system-engineering/"
      ) {
        $(".aboutLink").addClass("active");
      } else if (
        URI == "/contact-us/" ||
        URI == "/contact-us/leave-a-feedback/" ||
        URI == "/contact-us/locations/"
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
