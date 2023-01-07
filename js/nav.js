// grab nav button and menu
const navActive = document.getElementById('nav-active')
const navButton = document.getElementById('nav-button');
const navLinks = document.getElementsByClassName('nav-link');
const navMenu = document.getElementById('nav-menu');

// open and close the nav menu
const toggleNav = () => {
  if (navMenu.style.display === 'block') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
}

// Using the active page link
navActive.addEventListener('click', () => {
  toggleNav();
  });

// Using the bars button
navButton.addEventListener('click', () => {
  toggleNav();
  });

// Close the menu when leaving the page
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', () => {
    toggleNav();
  })
}