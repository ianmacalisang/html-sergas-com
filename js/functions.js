$(document).ready(function () {
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
  }, 500);
  window.onload = function () {
    function addWatermark() {
      var watermark = document.createElement("div");
      watermark.className = "watermark";
      watermark.style.position = "fixed";
      watermark.style.top = "50%";
      watermark.style.left = "50%";
      watermark.style.transform = "translate(-50%, -50%) rotate(-15deg)";
      watermark.style.fontSize = "3.5em";
      watermark.style.fontWeight = "bold";
      watermark.style.opacity = "0.2";
      watermark.innerHTML = "For Demo Purposes Only";
      document.body.appendChild(watermark);
    }

    function checkWatermark() {
      var watermark = document.querySelector(".watermark");
      if (!watermark) {
        addWatermark();
      }
    }
    addWatermark();
    setInterval(checkWatermark, 1000);
  };
});
