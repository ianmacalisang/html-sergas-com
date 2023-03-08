$(document).ready(function () {
  var path = window.location.pathname;

  function loadStatic(URI) {
    if (
      URI == "/dash/" ||
      URI == "/dash/bills-and-payments/" ||
      URI == "/dash/new-connection/" ||
      URI == "/dash/moving-houses/" ||
      URI == "/dash/gas-meter-reading/" ||
      URI == "/dash/usage/" ||
      URI == "/dash/feedback/"
    ) {
      var $head = $("head");
      var $headlinklast = $head.find("link[rel='stylesheet']:last");
      var linkElement =
        "<link rel='stylesheet' href='./css/dashboard.css' type='text/css' media='screen'>";
      if ($headlinklast.length) {
        $headlinklast.after(linkElement);
      } else {
        $head.append(linkElement);
      }
      $("#headerContainer").load("./partials/dashboard/navigator.html");
    } else {
      $("#headerContainer").load("./partials/header.html");
      $("#footerContainer").load("./partials/footer.html");
    }
  }
  function getViews(URI) {
    if (URI == "/") {
      $("title").html("Home | Sergas Group of Companies");
      $("#viewsContainer").load("./views/home.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/home/nav-menu.html");
      }, 200);
    }

    // load home nav pages
    else if (URI == "/help-and-support/") {
      $("title").html("Home | Help and Support | Sergas Group of Companies");
      $("#viewsContainer").load(
        "./views/inner/home/nav-links/help-and-support.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/home/nav-menu.html");
      }, 200);
    } else if (URI == "/business/") {
      $("title").html("For Business | Sergas Group of Companies");
      $("#viewsContainer").load("./views/business.html");
      setTimeout(function () {
        $("#business-cta").load("./partials/business-cta.html");
        $(".load-submenu").load("./views/inner/business/nav-menu.html");
      }, 200);
    }

    // start loading all about inner pages
    else if (URI == "/about/message-from-management/") {
      $("title").html(
        "About Us | Message From Management | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/inner/about/message.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 200);
    } else if (URI == "/about/why-choose-lpg/") {
      $("title").html("About Us | Choose LPG | Sergas Group of Companies");
      $("#viewsContainer").load("./views/inner/about/about-us.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
        $("#sector-loader").load("./partials/sectors-tab.html");
      }, 200);
    } else if (URI == "/about/history/") {
      $("title").html("About Us | Our History | Sergas Group of Companies");
      $("#viewsContainer").load("./views/inner/about/history.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 200);
    } else if (URI == "/about/sergas-group-members/") {
      $("title").html(
        "About Us | Our Group Members | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/inner/about/members.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 200);
    } else if (URI == "/about/qhse-policy/") {
      $("title").html("About Us | QHSE Policy | Sergas Group of Companies");
      $("#viewsContainer").load("./views/inner/about/policy.html");
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/about/nav-menu.html");
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
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
      }, 200);
    } else if (URI == "/contact-us/leave-a-feedback/") {
      $("title").html(
        "Contact Us | B2B: Leave a Feedback | Sergas Group of Companies"
      );
      $("#viewsContainer").load(
        "./views/inner/contact/nav-links/leave-a-feedback.html"
      );
      setTimeout(function () {
        $(".load-submenu").load("./views/inner/contact/nav-menu.html");
      }, 200);
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
            zoom: 15,
          });
          addPinToMap(map, 25.187863969324173, 55.26185619252998);
        }

        function addPinToMap(map, latitude, longitude) {
          var pushpin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(latitude, longitude),
            {
              icon: '<?xml version="1.0" encoding="UTF-8"?><svg width="30" height="39" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 39"><defs><style>.cls-1{fill:#e5a227;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#345c92;}</style></defs><path class="cls-2" d="m15,5.09c-4.44,0-8.03,3.6-8.03,8.03s3.6,8.03,8.03,8.03,8.03-3.6,8.03-8.03-3.6-8.03-8.03-8.03m0-5.09C7.76,0,1.88,5.88,1.88,13.12c0,3.02,1.1,5.73,2.72,8l10.4,14.57,10.4-14.57c1.62-2.27,2.72-4.98,2.72-8,0-7.24-5.87-13.12-13.12-13.12Z"/><path class="cls-1" d="m15,39c6.82,0,12.35-1.97,12.35-4.4,0-1.79-2.98-3.32-7.27-4.01l-.89,1.25c3.02.51,5.08,1.56,5.08,2.76,0,1.71-4.15,3.09-9.27,3.09s-9.27-1.39-9.27-3.09c0-1.2,2.06-2.25,5.07-2.76-.3-.42-.59-.84-.89-1.25-4.28.69-7.25,2.23-7.25,4.01,0,2.43,5.53,4.4,12.35,4.4"/><path class="cls-1" d="m15,8.16c-2.74,0-4.95,2.22-4.95,4.95s2.22,4.95,4.95,4.95,4.95-2.22,4.95-4.95-2.22-4.95-4.95-4.95"/></svg>',
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
      }, 200);
    }
    // end loading contact us links

    //start loading dashboard
    else if (URI == "/dash/bills-and-payments/") {
      $("title").html(
        "Bills and Payments | Customer Portal | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/dashboard.html");
      setTimeout(function () {
        $("#dashboard-context").load(
          "./views/inner/dashboard/bills-and-payments.html"
        );
      }, 200);
    } else if (URI == "/dash/") {
      $("title").html(
        "Dashboard | Customer Portal | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/dashboard.html");
      setTimeout(function () {
        $("#dashboard-context").load(
          "./views/inner/dashboard/main-dashboard.html"
        );
      }, 200);
    } else if (URI == "/dash/new-connection/") {
      $("title").html(
        "New Connection | Customer Portal | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/dashboard.html");
      setTimeout(function () {
        $("#dashboard-context").load(
          "./views/inner/dashboard/new-connection.html"
        );
      }, 200);
    } else if (URI == "/dash/moving-houses/") {
      $("title").html(
        "Moving Houses | Customer Portal | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/dashboard.html");
      setTimeout(function () {
        $("#dashboard-context").load(
          "./views/inner/dashboard/moving-houses.html"
        );
      }, 200);
    } else if (URI == "/dash/gas-meter-reading/") {
      $("title").html(
        "Moving Houses | Customer Portal | Sergas Group of Companies"
      );
      $("#viewsContainer").load("./views/dashboard.html");
      setTimeout(function () {
        $("#dashboard-context").load(
          "./views/inner/dashboard/gas-meter-reading.html"
        );
      }, 200);
    } else if (URI == "/dash/usage/") {
      $("title").html("Usage | Customer Portal | Sergas Group of Companies");
      $("#viewsContainer").load("./views/dashboard.html");
      setTimeout(function () {
        $("#dashboard-context").load("./views/inner/dashboard/usage.html");
      }, 200);
    } else if (URI == "/dash/feedback/") {
      $("title").html("Usage | Customer Portal | Sergas Group of Companies");
      $("#viewsContainer").load("./views/dashboard.html");
      setTimeout(function () {
        $("#dashboard-context").load("./views/inner/dashboard/feedback.html");
      }, 200);
    }
    // end loading dashboard
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
      // process dashboard active links
      else if (URI == "/dash/") {
        $(".dashLink").addClass("active");
      } else if (URI == "/dash/bills-and-payments/") {
        $(".billPaymentsLink").addClass("active");
      } else if (URI == "/dash/new-connection/") {
        $(".newConnectionLink").addClass("active");
      } else if (URI == "/dash/moving-houses/") {
        $(".movingHousesLink").addClass("active");
      } else if (URI == "/dash/gas-meter-reading/") {
        $(".gasMeterLink").addClass("active");
      } else if (URI == "/dash/usage/") {
        $(".usageLink").addClass("active");
      } else if (URI == "/dash/feedback/") {
        $(".feedBackLink").addClass("active");
      }
    }, 100);
  }
  loadStatic(path);
  getViews(path);
  getActive(path);
  console.log(path);
});
