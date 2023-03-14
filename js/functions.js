$(document).ready(function () {
  var path = window.location.pathname;
  setTimeout(function () {
    $(".gallery-carousel").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".gallery-carousel .image img").click(function () {
      var datasrc = $(this).attr("src");
      console.log(datasrc);
      $("#image-viewer").modal("show");
      $("#image-viewer .modal-content img").attr("src", datasrc);
    });
    $("#file-upload").click(function () {
      console.log("button clicked");
      $("#meter-reading").click();
    });
    // process locations
    function outputLocations(path) {
      // load all locations
      const locations = [
        {
          title: "Head Office",
          address:
            "Floor no. 10, Sky Tower,<br/>Reem Island<br/>P.O. Box 3376, <br/>Abu Dhabi, U.A.E.",
          tel: "+971 2 6732626",
          fax: "+971 2 6732627",
          email: "support@sergas.com ",
          latitude: "24.496474340992272",
          longitude: "54.40856304904813",
        },
        {
          title: "Branch Office",
          address:
            "Mussafah Industrial 21,<br/>Opp. Falcon motors,<br/>Near Al Jaber Factory,<br/>Abu Dhabi, U.A.E.",
          tel: "+971 2 5542268",
          fax: "",
          email: "support@sergas.com  ",
          latitude: "24.372956484205645",
          longitude: "54.47381978130452",
        },
        {
          title: "Al Ain – U.A.E.",
          address:
            "Sheikh Zayed Street<br/>Opp to Sheikha Salama Mousque<br/>Sheikh Saif Bin Zayed Building, floor 2<br/>P.O.Box: 85929, Al Ain, UAE",
          tel: "+971 3 7515919",
          fax: "",
          email: "support.alain@sergas.com",
          latitude: "24.222060825384876",
          longitude: "55.76717849655938",
        },
        {
          title: "Abu Dhabi - U.A.E.",
          address:
            "Mussafah Industrial 21,<br/>Opp. Falcon Motors,<br/>Near Al Jaber Factory,<br/>P.O.Box: 3376, Abu Dhabi, U.A.E.",
          tel: "+971 2 6732623",
          fax: "",
          email: "sales@gecollc.com",
          latitude: "24.373107429087316",
          longitude: "54.47367056102544",
        },
        {
          title: "Dubai - U.A.E.",
          address:
            "Al Mashora Building,<br/>Ras al Khor Rd,<br/>P.O. Box: 33961,<br/>Nadd al Hamar, Dubai – UAE",
          tel: "+971 4 2631435",
          fax: "",
          email: "info@gecollc.com",
          latitude: "25.183627667933788",
          longitude: "55.38117182302913",
        },
        {
          title: "Ajman - U.A.E.",
          address: "P.O.Box: 46006,<br/>Ajman, U.A.E.",
          tel: "+971 6 7404309",
          fax: "",
          email: "igsajman@sergas.com",
          latitude: "25.399284303835735",
          longitude: "55.4488755376064",
        },
        {
          title: "Ras Al Khaimah - U.A.E.",
          address: "P.O.Box: 12315,<br/>Ras Al Khaimah,<br/>U.A.E.",
          tel: "+971 7 2339466",
          fax: "",
          email: "igsrasalhkhaimah@sergas.com",
          latitude: "",
          longitude: "",
        },
        {
          title: "Muscat - Oman",
          address:
            "Office no. 510,<br/>Business Center, Al Khuwair<br/>P.O.Box: 907,<br/>Muscat, Oman",
          tel: "+968 2 4484286",
          fax: "",
          email: "aigesco@omantel.net.om",
          latitude: "23.59563082587497",
          longitude: "58.43949158689654",
        },
        {
          title: "Dammam - K.S.A.",
          address:
            "Port Gate Shop No. 15,<br/>P.O.Box: 27,<br/>Dammam 31411,<br/>K.S.A.",
          tel: "+966 13 814 0025",
          fax: "",
          email: "sergas.ksa@sergas.com",
          latitude: "26.414545225591954",
          longitude: "50.15977861833022",
        },
        {
          title: "Dubai - U.A.E.",
          address:
            "Office No. 1404, One Building<br/>by Omniyat Business Bay<br/>P.O.Box: 33961,<br/> Dubai, U.A.E.",
          tel: "+971 4 4517773",
          fax: "",
          email: "igsdubai@sergas.com",
          latitude: "25.187858502057974",
          longitude: "55.26185639438093",
        },
        {
          title: "Sharjah - U.A.E.",
          address:
            "Al Sajja<br/>Industrial Area<br/>P.O.Box: 72203,<br/>Sharjah, U.A.E.",
          tel: "+971 6 5036999",
          fax: "",
          email: "igssharjah@sergas.com",
          latitude: "25.351496176121067",
          longitude: "55.62424645766408",
        },
        {
          title: "Fujairah – U.A.E.",
          address: "P.O.Box: 9464,<br/>Fujairah,<br/>U.A.E.",
          tel: "+971 9 2283538",
          fax: "",
          email: "igsfujairah@sergas.com",
          latitude: "25.12115642479909",
          longitude: "56.33390542032367",
        },
      ];
      // end loading all locations
      let output = "<div class='row'>";
      for (const item of locations) {
        if (path === "contact-us") {
          output += `
        <div class="col-sm-4">
        <div class="card locations-card">
        <b>${item.title}</b>
        <hr />
        <div>
          <ul
            class="about-qhse-policy-list sectors-list locations-card-content"
          >
            <li>
              <ion-icon name="pin"></ion-icon>
              <p>
                ${item.address}
              </p>
            </li>
            <li>
              <ion-icon name="call"></ion-icon>
              <p>${item.tel}</p>
            </li>
            <li>
              <ion-icon name="mail-open"></ion-icon>
              <p>${item.email}</p>
            </li>
          </ul>
        </div>
        <br />
        <div class="row">
          <div class="col-sm">
          <a href="tel:${item.tel}" />
            <button
              class="btn btn-primary location-button">
              Call Now
            </button>
            </a>
          </div>
        </div>
      </div></div>`;
        } else {
          output += `
        <div class="col-sm-4">
        <div class="card locations-card">
        <b>${item.title}</b>
        <hr />
        <div>
          <ul
            class="about-qhse-policy-list sectors-list locations-card-content"
          >
            <li>
              <ion-icon name="pin"></ion-icon>
              <p>
                ${item.address}
              </p>
            </li>
            <li>
              <ion-icon name="call"></ion-icon>
              <p>${item.tel}</p>
            </li>
            <li>
              <ion-icon name="mail-open"></ion-icon>
              <p>${item.email}</p>
            </li>
          </ul>
        </div>
        <br />
        <div class="row">
          <div class="col-sm">
          <button
                class="btn btn-primary location-button"
                data-latitude="${item.latitude}"
                data-longitude="${item.longitude}"
              >
                Locate
              </button>
          </div>
        </div>
      </div></div>`;
        }
      }
      output += "</div>";

      $("#locations").html(output);
    }
    if (path == "/contact-us/") {
      outputLocations("contact-us");
    } else if (path == "/contact-us/locations/") {
      outputLocations("locations");
    }
  }, 900);
});
