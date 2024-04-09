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

// tooltips

tippy ('#html', {
  content: 'HTML or The HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
  animation: 'fade',
});
tippy ('#css', {
  content: 'CSS, or Cascading Style Sheets, is a style sheet language used to describe the visual presentation of HTML and XML documents, allowing developers to control the layout, design, and appearance of web pages.',
  animation: 'fade',
});
tippy ('#js', {
  content: 'JavaScript is a versatile programming language that enables dynamic behavior and interactivity on web pages, making it an essential tool for web development.',
  animation: 'fade',
});
tippy ('#express', {
  content: ' Express simplifies the process of creating web servers and APIs in Node.js by providing a simple and intuitive interface for handling HTTP requests, routing, middleware, and more.',
  animation: 'fade',
});
tippy ('#github', {
  content: 'GitHub is a web-based platform that enables version control, collaboration, and hosting of code repositories, making it a central hub for developers to manage and share their projects.',
  animation: 'fade',
});
tippy ('#mongo', {
  content: ' MongoDB is a popular open-source document-oriented NoSQL database program. It uses JSON-like documents with optional schemas, making data integration and management easier for certain types of applications',
  animation: 'fade',
});
tippy ('#react', {
  content: 'React is a powerful JavaScript library for building user interfaces that allows developers to create reusable UI components and efficiently update and render data-driven views.',
  animation: 'fade',
});
tippy ('#node', {
  content: 'Node.js is commonly used for building web servers, APIs (Application Programming Interfaces), real-time web applications.',
  animation: 'fade',
});
