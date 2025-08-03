document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.report-form');
  const modal = document.getElementById('successModal');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    modal.style.display = 'flex';

    setTimeout(() => {
      modal.style.display = 'none';
      form.reset();
    }, 2500);
  });
});
