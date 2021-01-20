const btn = document.getElementById('click');
const pic = document.getElementsByClassName('dark');

btn.addEventListener('click', function () {
  document.body.style.filter = 'invert(1) hue-rotate(180deg)';
});
