const previewTextElement = document.getElementById('preview')
const previewTextElement2 = document.getElementById('preview2')
const psychologyTextElement = document.getElementById('psychology')
const psychologyTextElement2 = document.getElementById('psychology2')
const mockupsTextElement = document.getElementById('mockups')
const mockupsTextElement2 = document.getElementById('mockups2')
const logoImageElement = document.getElementById('slideImg')
const logoImageElement2 = document.getElementById('slideImg2')

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

//logo slider
let currentIndex = 0;
let startX = 0; // Starting X position of the mouse/touch
let isDragging = false; // Flag to check if the user is dragging
let sliderStartPosition = 0; // Slider's initial position when dragging starts

// Function to move the slider based on step (when button is clicked)
function moveSlider(step) {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.logoSlide').clientWidth;
    const totalSlides = slider.children.length;

    currentIndex += step;

    // Looping the slides
    if (currentIndex < 0) {
        currentIndex = totalSlides - 3; // If at the beginning, go to the last set
    } else if (currentIndex > totalSlides - 3) {
        currentIndex = 0; // If at the end, return to the start
    }

    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Handle the start of dragging (mouse down / touch start)
function startDrag(e) {
    isDragging = true;
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;

    const slider = document.querySelector('.slider');
    sliderStartPosition = parseInt(slider.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

    // Prevent text selection while dragging
    e.preventDefault();
}

// Handle dragging (mouse move / touch move)
function onDrag(e) {
    if (!isDragging) return;

    const slider = document.querySelector('.slider');

    // Get the current X position of the mouse/touch
    let currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    let diffX = currentX - startX;

    // Move the slider based on the difference in positions
    slider.style.transform = `translateX(${sliderStartPosition + diffX}px)`;
}

// Handle the end of dragging (mouse up / touch end)
function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;

    const slideWidth = document.querySelector('.logoSlide').clientWidth;
    const slider = document.querySelector('.slider');
    const threshold = slideWidth / 4; // Minimum drag distance to trigger a slide

    // Calculate the final position difference
    let endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    let diffX = endX - startX;

    // Move to the next or previous slide if the drag distance is significant
    if (Math.abs(diffX) > threshold) {
        moveSlider(diffX > 0 ? -1 : 1); // Move based on drag direction
    } else {
        // Reset position if the drag was too small
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

// Event listeners for mouse and touch events
const sliderContainer = document.querySelector('.slider');

sliderContainer.addEventListener('mousedown', startDrag);
sliderContainer.addEventListener('mousemove', onDrag);
document.addEventListener('mouseup', endDrag); // Use document for mouseup to catch outside the slider

sliderContainer.addEventListener('touchstart', startDrag);
sliderContainer.addEventListener('touchmove', onDrag);
sliderContainer.addEventListener('touchend', endDrag);



let currentIndexPoster = 0;
let startXPoster = 0; // Starting X position of the mouse/touch for posters
let isDraggingPoster = false; // Flag to check if the user is dragging for posters
let sliderStartPositionPoster = 0; // Poster slider's initial position when dragging starts

// Function to move the poster slider based on step (when button is clicked)
function moveSliderPoster(step) {
  const slider = document.querySelector('.sliderPoster');
  const slideWidth = document.querySelector('.posterSlide').clientWidth;
  const maxIndex = slider.children.length - 1;

  currentIndexPoster += step;

  const maxAllowedIndex = maxIndex;
  currentIndexPoster = Math.min(currentIndexPoster, maxAllowedIndex);

  slider.style.transform = `translateX(-${currentIndexPoster * slideWidth}px)`;
}

// Handle the start of dragging (mouse down / touch start) for posters
function startDragPoster(e) {
    isDraggingPoster = true;
    startXPoster = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;

    const slider = document.querySelector('.sliderPoster');
    sliderStartPositionPoster = parseInt(slider.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

    // Prevent text selection while dragging
    e.preventDefault();
}

// Handle dragging (mouse move / touch move) for posters
function onDragPoster(e) {
    if (!isDraggingPoster) return;

    const slider = document.querySelector('.sliderPoster');

    // Get the current X position of the mouse/touch
    let currentXPoster = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    let diffXPoster = currentXPoster - startXPoster;

    // Move the slider based on the difference in positions
    slider.style.transform = `translateX(${sliderStartPositionPoster + diffXPoster}px)`;
}

// Handle the end of dragging (mouse up / touch end) for posters
function endDragPoster(e) {
    if (!isDraggingPoster) return;
    isDraggingPoster = false;

    const slideWidth = document.querySelector('.posterSlide').clientWidth;
    const slider = document.querySelector('.sliderPoster');
    const thresholdPoster = slideWidth / 4; // Minimum drag distance to trigger a slide

    // Calculate the final position difference
    let endXPoster = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    let diffXPoster = endXPoster - startXPoster;

    // Move to the next or previous slide if the drag distance is significant
    if (Math.abs(diffXPoster) > thresholdPoster) {
        moveSliderPoster(diffXPoster > 0 ? -1 : 1); // Move based on drag direction
    } else {
        // Reset position if the drag was too small
        slider.style.transform = `translateX(-${currentIndexPoster * slideWidth}px)`;
    }
}

// Event listeners for mouse and touch events for poster slider
const sliderPosterContainer = document.querySelector('.sliderPoster');

sliderPosterContainer.addEventListener('mousedown', startDragPoster);
sliderPosterContainer.addEventListener('mousemove', onDragPoster);
document.addEventListener('mouseup', endDragPoster); // Use document for mouseup to catch outside the slider

sliderPosterContainer.addEventListener('touchstart', startDragPoster);
sliderPosterContainer.addEventListener('touchmove', onDragPoster);
sliderPosterContainer.addEventListener('touchend', endDragPoster);

// NAVBAR
const hamburgerElement = document.querySelectorAll('[hamburger]')
hamburgerElement.forEach(ham => {
  ham.addEventListener('click', navbarSlide)
})
navbarSlide()
function navbarSlide(e) {
  transitionSlide()
  toggleHamburger()
}
function toggleHamburger() {
  const hamburgerHam = document.querySelector('.hamburger.ham');
  const hamburgerCross = document.querySelector('.hamburger.cross');

  if (hamburgerHam.style.display === 'none' || hamburgerHam.style.display === '') {
      hamburgerHam.style.display = 'block';
      hamburgerCross.style.display = 'none';
  } else {
      hamburgerHam.style.display = 'none';
      hamburgerCross.style.display = 'block';
  }
}
transitionSlide()
function transitionSlide() {
  const headerItemsElement = document.querySelector('.headerItemsMobile')
  headerItemsElement.classList.toggle('open')
}
