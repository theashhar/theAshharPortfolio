const slider = document.querySelector('.slider');
const circles = document.querySelectorAll('.circle');

let currentIndex = 0;

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        moveToSlide(index);
    });
});

function moveToSlide(index) {
    currentIndex = index;
    updateSliderPosition();
    updateActiveCircle();
}

function updateSliderPosition() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

function updateActiveCircle() {
    circles.forEach((circle, index) => {
        if (index === currentIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}
