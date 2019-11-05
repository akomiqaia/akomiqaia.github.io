const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)

const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')

const slideWidth = slides[0].getBoundingClientRect().width
// console.log(slideWidth)

// arrange the slides position
// we arrange all the slides next to each other
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = slideWidth * i + 'px'
}

// next buuton click

nextButton.addEventListener('click', e => {
  // find the current slide
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling
  const amountToMove = nextSlide.style.left
  // move to the next slide
  track.style.transform = 'translateX(-' + amountToMove + ')'
  currentSlide.classList.remove('current-slide')
  nextSlide.classList.add('current-slide')
})
// previous button click

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling
  const amountToMove = prevSlide.style.left
  track.style.transform = 'translateX(-' + amountToMove + ')'
  currentSlide.classList.remove('current-slide')
  prevSlide.classList.add('current-slide')
})
