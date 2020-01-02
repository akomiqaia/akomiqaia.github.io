let slideIndex = 0  // tracking the index of the current slide
let slideShowTimer //timer for the slideshow
let stop = document.querySelector('.stop') // stop button
let play = document.querySelector('.play') // start button


//  function to setup the interval for looping carousel
function timedSlideShow () {
  slideIndex++
  showSlides(slideIndex)
  slideShowTimer = setTimeout(timedSlideShow, 5000)
}
timedSlideShow()


// function that takes an integer that is either 1 or -1
// depending if user preses next button or previous
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
  play.style.display = 'none'
  stop.style.display = 'block'
}


// play and stop button funcitonality for carousel

let carouselOn = 0  // to keep the track of carousel


function startCarousel () {
  if (!carouselOn) {
    carouselOn = 1
    timedSlideShow()
    play.style.display = 'none'
    stop.style.display = 'block'
  }
}

function stopCarousel () {
  clearTimeout(slideShowTimer)
  carouselOn = 0
  stop.style.display = 'none'
  play.style.display = 'block'
}

