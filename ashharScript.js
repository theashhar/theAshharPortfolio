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

// Load Google Analytics Script Dynamically
if (typeof GA_MEASUREMENT_ID !== 'undefined' && GA_MEASUREMENT_ID) {
  // Load the Google Analytics library
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize Google Analytics
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);
}


