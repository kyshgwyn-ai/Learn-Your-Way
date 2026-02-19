// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Modal functionality
const cards = document.querySelectorAll('.way-card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.style.display = 'none';
  });
});

// Close modal if click outside content
window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
