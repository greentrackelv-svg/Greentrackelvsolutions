const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Prevent accidental future years in the registration-year field.
const yearInput = document.querySelector('input[name="registration_year"]');
if (yearInput) {
  yearInput.max = new Date().getFullYear();
}

// Basic client-side phone feedback.
const form = document.querySelector('.quote-form');
if (form) {
  form.addEventListener('submit', (event) => {
    const phone = form.querySelector('input[name="phone"]');
    if (phone && !/^\d{10}$/.test(phone.value.trim())) {
      event.preventDefault();
      phone.setCustomValidity('Please enter a valid 10-digit mobile number.');
      phone.reportValidity();
      phone.setCustomValidity('');
    }
  });
}
