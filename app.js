const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

// Open modal
openBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});