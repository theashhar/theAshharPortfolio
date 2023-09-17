
// const headingElements = document.querySelectorAll('[subHeadings]')
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
