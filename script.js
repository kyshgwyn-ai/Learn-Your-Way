// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Modal functionality
const cards = document.querySelectorAll('.way-card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;
    document.getElementById(modalId).style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact button {
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links li {
    display: block;
    margin: 0.5rem 0;
  }

  .contact form input,
  .contact form textarea {
    width: 90%;
  }
    }
