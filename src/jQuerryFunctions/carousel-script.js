export default function() {
  $(".nonloop-block-3").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    smartSpeed: 700,
    stagePadding: 15,
    margin: 20,
    autoplay: true,
    nav: true,
    navText: [
      '<span class="icon-arrow_back">',
      '<span class="icon-arrow_forward">',
    ],
    responsive: {
      600: {
        margin: 20,
        items: 2,
      },
      1000: {
        margin: 20,
        items: 3,
      },
      1200: {
        margin: 20,
        items: 3,
      },
    },
  });
}
