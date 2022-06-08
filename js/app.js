// w3
const accordions = document.getElementsByClassName('contentBx');

for (let accordion of accordions) {
  accordion.addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
// w3
