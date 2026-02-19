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
});
.way-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.way-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.way-card h3 {
  margin-bottom: 0.6rem;
  color: #222;
}

.way-card p {
  color: #555;
  font-size: 0.95rem;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.6);
}

.modal-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 2rem;
  border-radius: 12px;
  width: 80%;
  max-width: 500px;
  position: relative;
  text-align: center;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

/* About */
.about {
  padding: 3rem 2rem;
  text-align: center;
}

/* Contact */
.contact {
  padding: 3rem 2rem;
  text-align: center;
}

.contact form input,
.contact form textarea {
  width: 60%;
  padding: 0.7rem;
  margin-bottom: 1rem;
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
