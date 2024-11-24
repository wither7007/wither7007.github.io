var container = document.querySelector('.container'),
    slider = document.querySelector('input');

slider.addEventListener('input', function () {
  container.style.gap = this.value + 'rem';
}, false);    