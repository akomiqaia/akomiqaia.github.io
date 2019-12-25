// carousel from w3school
let slideIndex = 1
let slideShowTimer
showSlides(slideIndex)

function plusSlides (n) {
  clearTimeout(slideShowTimer)
  showSlides((slideIndex += n))
  slideIndex--
  timedSlideShow()
}

// arrow navigations for the slideshow
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      plusSlides(-1)
      break
    case 39:
      plusSlides(1)
      break
  }
}

// function to show the slideshow
function showSlides (n) {
  const slides = document.querySelectorAll('.carousel__slide')
  slides.forEach((x) => {
    x.style.display = 'none'
  })
  if (slideIndex > slides.length || n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides[slideIndex - 1].style.display = 'block'
}
//  function to setup the interval for looping carousel
function timedSlideShow () {
  slideIndex++
  showSlides(slideIndex)
  slideShowTimer = setTimeout(timedSlideShow, 7000)
}
timedSlideShow()

// play and stop button funcitonality for carousel

let carouselOn = 0

function startCarousel () {
  if (!carouselOn) {
    carouselOn = 1
    timedSlideShow()
  }
}

function stopCarousel () {
  clearTimeout(slideShowTimer)
  carouselOn = 0
}
