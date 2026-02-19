const cards = document.querySelectorAll('.way-card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;
    const modal = document.getElementById(modalId);
    if(modal) modal.style.display = 'block';
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
