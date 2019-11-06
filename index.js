const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)

const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')

// arrange the slides position
// we arrange all the slides next to each other
// and add css style to hide the overflow

const slideWidth = slides[0].getBoundingClientRect().width
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = slideWidth * i + 'px'
}

// eventlisten when the page loads
// setInterval(moveToSlide, 3000)
// function changeCarousel () {
//   let currentSlide = track.querySelector('.current-slide')
//   let lastChild = track.lastElementChild
//   // if (currentSlide == lastChild) {
//   //   currentSlide = slides[0]
//   // }
//   let nextSlide = currentSlide.nextElementSibling
//   moveToSlide(track, currentSlide, nextSlide)
//   setTimeout(changeCarousel(), 4000)
// }

// window.onload = changeCarousel
// carousel works in timeinterval
// every 3 seconds moves class 'current-slide' by next sibling

// on hover pause the carousel

// function to move slide

function moveToSlide (track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}

// next buuton click
nextButton.addEventListener('click', e => {
  // find the current slide
  const currentSlide = track.querySelector('.current-slide')
  let nextSlide = currentSlide.nextElementSibling
  if (track.lastElementChild == currentSlide) {
    nextSlide = track.firstElementChild
  }
  // move to the next slide
  moveToSlide(track, currentSlide, nextSlide)
})

// previous button click
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  let prevSlide = currentSlide.previousElementSibling
  if (track.firstElementChild == currentSlide) {
    prevSlide = track.lastElementChild
  }
  // move to previous slide
  moveToSlide(track, currentSlide, prevSlide)
})

// add key press events here, for pause and play as well