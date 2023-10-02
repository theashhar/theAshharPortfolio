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
function transitionSlide() {
  const headerItemsElement = document.getElementById('headerItems')
  headerItemsElement.classList.toggle('open')
}
// function transitionSlide() {
//   const headerItemsElement = document.getElementById('headerItems')
//   if (headerItemsElement.style.opacity === '0') {
//     headerItemsElement.style.opacity = '1'
//     }
//     else {
//       headerItemsElement.style.opacity = '0'
//     }
// }