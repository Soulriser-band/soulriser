
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  const modalTitle = document.getElementById('modal-title');
  const closeBtn = modal.querySelector('.modal-close');

  function openModal(title, html) {
    modalTitle.textContent = title || '';
    modalText.innerHTML = html || '<em>Sin descripción</em>';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    // evitar scroll de fondo
    document.body.style.overflow = 'hidden';
    // foco accesible
    setTimeout(() => closeBtn.focus(), 120);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // cierres
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(); // clic en overlay
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  // abrir desde cada <dl>
  document.querySelectorAll('dl').forEach(dl => {
    dl.style.cursor = 'pointer';
    dl.addEventListener('click', () => {
      const title = dl.querySelector('dt')?.textContent?.trim() || '';
      const dd = dl.querySelector('dd');
      const html = dd ? dd.innerHTML : '<em>Sin descripción</em>';
      openModal(title, html);
    });
  });
});

