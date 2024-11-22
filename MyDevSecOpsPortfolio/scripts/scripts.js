// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust based on header height
        behavior: 'smooth',
      });
    }
  });
});

function showModal() {
  // Create the modal container
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'modal';

  // Create the modal content
  modal.innerHTML = `
    <div class="modal-content">
      <p>You are hacked. Wait, it's still in process...</p>
      <button class="close-btn" onclick="closeModal()">Close</button>
    </div>
  `;

  // Append the modal to the body
  document.body.appendChild(modal);
}

function closeModal() {
  // Remove the modal from the DOM
  const modal = document.getElementById('modal');
  if (modal) {
    modal.remove();
  }

  // Redirect to homepage
  window.location.href = '#home';
}


// Attach event listeners for demo buttons
document.querySelectorAll('.cta-btn').forEach(button => {
  button.addEventListener('click', event => {
    if (button.textContent.includes('Start Demo')) {
      showModal();
    }
  });
});

// Automatically close dropdowns when clicking outside
window.addEventListener('click', event => {
  const dropdowns = document.querySelectorAll('nav ul li ul');
  dropdowns.forEach(dropdown => {
    if (!event.target.closest('nav ul li')) {
      dropdown.style.display = 'none';
    }
  });
});


