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
// const contactButton = document.getElementById('remoteSlideNav');
// contactButton.addEventListener('click', navbarSlide);

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

window.addEventListener('load', function() {
  // After 3 seconds, add a class to activate the hover effect
  setTimeout(function() {
      var mainImage = document.querySelector('.mainImage');
      mainImage.classList.add('activateHover');
  }, 2000); // 3000 milliseconds = 3 seconds
});