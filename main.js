const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header-container h1", scrollRevealOption);

ScrollReveal().reveal(".header-container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about-container .section-header", scrollRevealOption);
ScrollReveal().reveal(".about-container .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});



// places container
ScrollReveal().reveal(".places-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".places-card-content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});


