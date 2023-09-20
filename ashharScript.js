const previewTextElement = document.getElementById('preview')
const previewTextElement2 = document.getElementById('preview2')
const psychologyTextElement = document.getElementById('psychology')
const psychologyTextElement2 = document.getElementById('psychology2')
const mockupsTextElement = document.getElementById('mockups')
const mockupsTextElement2 = document.getElementById('mockups2')
const logoImageElement = document.getElementById('slideImg')
const logoImageElement2 = document.getElementById('slideImg2')
// const logoImageElement2 = document.querySelectorAll('[cellData]')

// headingElements.forEach(cell => {     
//     cell.addEventListener('click', clickMark, { once : true })
// })


previewTextElement.addEventListener('click', handleClick)
function handleClick() {
    logoImageElement.classList.remove('psychology')
    logoImageElement.classList.remove('mockups')
    logoImageElement.classList.add('preview')
    psychologyTextElement.classList.remove('hover')
    mockupsTextElement.classList.remove('hover')
    previewTextElement.classList.add('hover')
}
psychologyTextElement.addEventListener('click', handleClick2)
function handleClick2() {
    logoImageElement.classList.remove('preview')
    logoImageElement.classList.remove('mockups')
    logoImageElement.classList.add('psychology')
    previewTextElement.classList.remove('hover')
    mockupsTextElement.classList.remove('hover')
    psychologyTextElement.classList.add('hover')
}
mockupsTextElement.addEventListener('click', handleClick3)
function handleClick3() {
    logoImageElement.classList.remove('preview')
    logoImageElement.classList.remove('psychology')
    logoImageElement.classList.add('mockups')
    previewTextElement.classList.remove('hover')
    psychologyTextElement.classList.remove('hover')
    mockupsTextElement.classList.add('hover')
}



previewTextElement2.addEventListener('click', handleClickPrev)
function handleClickPrev() {
    logoImageElement2.classList.remove('psychology2')
    logoImageElement2.classList.remove('mockups2')
    logoImageElement2.classList.add('preview2')
    psychologyTextElement2.classList.remove('hover')
    mockupsTextElement2.classList.remove('hover')
    previewTextElement2.classList.add('hover')
}
psychologyTextElement2.addEventListener('click', handleClickPsy)
function handleClickPsy() {
    logoImageElement2.classList.remove('preview2')
    logoImageElement2.classList.remove('mockups2')
    logoImageElement2.classList.add('psychology2')
    previewTextElement2.classList.remove('hover')
    mockupsTextElement2.classList.remove('hover')
    psychologyTextElement2.classList.add('hover')
}
mockupsTextElement2.addEventListener('click', handleClickMock)
function handleClickMock() {
    logoImageElement2.classList.remove('preview2')
    logoImageElement2.classList.add('mockups2')
    previewTextElement2.classList.remove('hover')
    psychologyTextElement2.classList.remove('hover')
    mockupsTextElement2.classList.add('hover')
}



let currentIndex = 0;

function moveSlider(step) {
  const slider = document.querySelector('.slider');
  const slideWidth = document.querySelector('.logoSlide').clientWidth;
  const maxIndex = slider.children.length - 1;

  currentIndex += step;

  // Ensure currentIndex doesn't go beyond the last set of images
  const maxAllowedIndex = maxIndex - 2;
  currentIndex = Math.min(currentIndex, maxAllowedIndex);

  // Disable or enable the "Next" button based on currentIndex
//   const nextButton = document.querySelector('.next-button');
//   nextButton.disabled = currentIndex === maxAllowedIndex;

//   currentIndex = Math.max(currentIndex, 0);

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// const nextButton = document.querySelector('.next-button');
// nextButton.disabled = currentIndex === maxAllowedIndex;

let currentIndexPoster = 0
function moveSliderPoster(step) {
  const slider = document.querySelector('.sliderPoster');
  const slideWidth = document.querySelector('.posterSlide').clientWidth;
  const maxIndex = slider.children.length - 1;

  currentIndexPoster += step;

  // Ensure currentIndex doesn't go beyond the last set of images
  const maxAllowedIndex = maxIndex;
  currentIndexPoster = Math.min(currentIndexPoster, maxAllowedIndex);

  // Disable or enable the "Next" button based on currentIndexPoster
//   const nextButton = document.querySelector('.next-button2');
//   nextButton.disabled = currentIndexPoster === maxAllowedIndex;

//   currentIndexPoster = Math.max(currentIndexPoster, 0);

  slider.style.transform = `translateX(-${currentIndexPoster * slideWidth}px)`;
}









// const scrollThreshold = 50;
// // Add scroll event listener
// document.addEventListener('wheel', handleScroll);

// function handleScroll(event) {
//   if (event.deltaY > scrollThreshold) {
//     // Scrolled down, move to the next set of images
//     moveSlider(1);
//   } else if (event.deltaY < -scrollThreshold) {
//     // Scrolled up, move to the previous set of images
//     moveSlider(-1);
//   }
// }





// const carouselContainer = document.querySelector('.carousel-container');
// const carouselImages = document.querySelector('.carousel-images');
// const navButtons = document.querySelectorAll('.carousel-nav p');

// let currentSlide = 0;

// navButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         currentSlide = index;
//         updateCarousel();
//     });
// });

// function updateCarousel() {
//     const translateX = -currentSlide * carouselContainer.clientWidth;
//     carouselImages.style.transform = `translateX(${translateX}px)`;
// }

// updateCarousel();

// // Handle window resize to update carousel width
// window.addEventListener('resize', () => {
//     updateCarousel();
// });







// const slider = document.querySelector('.slider');
// const circles = document.querySelectorAll('.circle');

// let currentIndex = 0;

// circles.forEach((circle, index) => {
//     circle.addEventListener('click', () => {
//         moveToSlide(index);
//     });
// });

// function moveToSlide(index) {
//     currentIndex = index;
//     updateSliderPosition();
//     updateActiveCircle();
// }

// function updateSliderPosition() {
//     const translateX = -currentIndex * 100;
//     slider.style.transform = `translateX(${translateX}%)`;
// }

// function updateActiveCircle() {
//     circles.forEach((circle, index) => {
//         if (index === currentIndex) {
//             circle.classList.add('active');
//         } else {
//             circle.classList.remove('active');
//         }
//     });
// }
