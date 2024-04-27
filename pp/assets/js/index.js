document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      const image = this.getAttribute('src');

      // Update main image
      mainImage.src = image;
    });
  });
});


// Add JavaScript to collapse the navbar when a link is clicked
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      document.querySelector('.navbar-collapse').classList.remove('show');
  });
});