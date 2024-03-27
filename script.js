$ (window).scroll (function () {
  if ($ (window).scrollTop () >= 80) {
    $ ('.header-bg').css ({
      background: '#111111d5',
      'backdrop-filter': 'saturate(180%) blur(10px)',
    });
  } else {
    $ ('.header-bg').css ({
      background: 'transparent',
      'backdrop-filter': 'none',
    });
  }
});

document.addEventListener ('DOMContentLoaded', function () {
  // Disable scrolling on page load
  document.documentElement.style.overflow = 'hidden';
  window.scrollTo (0, 0);

  setTimeout (function () {
    document.documentElement.style.overflow = 'auto';
  }, 1500);
});

window.addEventListener ('load', function () {
  setTimeout (function () {
    const preloader = document.getElementById ('preloader');
    preloader.style.display = 'none';
  }, 1500);
});

// typing animation
var typed = new Typed ('.typing', {
  strings: ['Muhammad Althaf'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
