// hamburger menu
const hamburger = document.getElementById('hamburger')
const navbar = document.querySelector('.navbar')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navbar.classList.toggle('navbar-is-active')
})


var comments = document.querySelectorAll('.comment-friends');

console.log(comments)

var techIcons = document.querySelectorAll('.card-img-top')
console.log(techIcons)
