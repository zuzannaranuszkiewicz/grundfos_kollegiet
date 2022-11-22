// cards

// when the dot is clicked, show another card
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1, nav: false },
  },
});
