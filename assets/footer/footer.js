document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('footer');
  if (!footerContainer) return;

  fetch('assets/footer/footer.html')
    .then(response => response.text())
    .then(html => {
      footerContainer.innerHTML = html;

      const yearSpan = footerContainer.querySelector('#currentYear');
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    })
    .catch(err => {
      console.error('Footer failed to load:', err);
    });
});