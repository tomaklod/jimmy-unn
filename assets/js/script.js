document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      autoplay: true,
      interval: 6000,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: false,
      padding: '10%',
      gap: "1em",
      throttle: 300,
      breakpoints: {
        1440: {
          perPage: 1,
        },
        1200: {
          perPage: 1,
        },
        1024: {
          perPage: 1,
        }
      }
    }).mount();
  });
  