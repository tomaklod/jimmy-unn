document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      autoplay: true,
      interval: 4000,
      pagination: false,
      updateOnMove: true,
      gap        : '1rem',
      padding: '1rem',
      breakpoints: {
        1440: {
          perPage: 3,
          gap: "1em",
        },
        1280: {
          perPage: 3,
          gap: "1em",
        },
        1024: {
          perPage: 2,
          gap: "1em",
          autoheight:true,
        },

        414: {
          perPage: 1,
          autoheight:true,
        }
      }
    }).mount();
  });
  