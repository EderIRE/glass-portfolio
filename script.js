const body = document.getElementsByTagName('BODY')[0];
const btn = document.getElementById('switchBtn');
const pic = document.querySelectorAll('IMG');

btn.addEventListener('click', function () {
  body.classList.toggle('darkMode');
  for (item of pic) {
    item.classList.toggle('darkMode');
  }
});
