// FAQ Section
const faqContainer = document.querySelector('.faq-content');

faqContainer.addEventListener('click', (e) => {
  const groupHeader = e.target.closest('.faq-group-header');

  if (!groupHeader) {
    return;
  }

  const group = groupHeader.parentElement;
  const groupBody = group.querySelector('.faq-group-body');
  const icon = groupHeader.querySelector('i');

  //Toggle icon

  icon.classList.toggle('fa-plus');
  icon.classList.toggle('fa-minus');

  //Toggle visibility of body

  groupBody.classList.toggle('open');

  //Close other open FAQ bodies

  const otherGroups = faqContainer.querySelectorAll('.faq-group');

  otherGroups.forEach((otherGroup) => {
    if (otherGroup !== group) {
      const otherGroupBody = otherGroup.querySelector('.faq-group-body');
      const otherIcon = otherGroup.querySelector('.faq-group-header i');

      otherGroupBody.classList.remove('open');
      otherIcon.classList.remove('fa-minus');
      otherIcon.classList.add('fa-plus');
    }
  });
});

//Mobile Menu

const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Get form elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

document.getElementById('loginForm').addEventListener('submit', function (e) {
  // Show an alert message
  alert('You have logged in successfully!!');
});
