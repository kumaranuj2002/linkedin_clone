// script2.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      if (email && password) {
        alert(`Welcome, ${email}!`);
        form.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  });