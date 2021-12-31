document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'loop',
      perPage: 4,
      autoplay: true,
      interval: 1500,
      cloneStatus: false,
      focus: 'center',
      clones:0,
      pagination: false,
      updateOnMove: true,
      gap: '1rem',
      padding: '1rem',
      breakpoints: {
        2560: {
          perPage: 4,
          gap: "1em",
          autoheight:true,
        },
        1440: {
          perPage: 3,
          gap: "1em",

        },
        1280: {
          perPage: 3,
          gap: "1em",

          clones:0,
        },
        1024: {
          perPage: 2,
          gap: "1em",
          autoheight:true,

          clones:0,
        },
        414: {
          perPage: 1,
          autoheight:true,
        }
      }
    })
    .mount();
  });
  