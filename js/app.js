const contactForm = document.getElementById('contactForm');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  let isFormValid = true;

  // Hide all error messages
  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(error => {
    error.style.display = 'none';
  });

  const fullName = document.getElementById('fullName').value.trim();
  if (fullName === '') {
    document.getElementById('nameError').style.display = 'block';
    isFormValid = false;
  }

  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').style.display = 'block';
    isFormValid = false;
  }

  const subject = document.getElementById('subject').value.trim();
  if (subject === '') {
    document.getElementById('subjectError').style.display = 'block';
    isFormValid = false;
  }

  const message = document.getElementById('message').value.trim();
  if (message === '') {
    document.getElementById('messageError').style.display = 'block';
    isFormValid = false;
  }

  // If all validations pass
  if (isFormValid) {
    // Hide form and show success message
    contactForm.style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';

    setTimeout(function() {
      contactForm.reset();
      contactForm.style.display = 'block';
      document.getElementById('successMessage').style.display = 'none';
    }, 5000);
  }
});
