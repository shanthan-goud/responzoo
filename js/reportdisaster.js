document
  .getElementById('disasterForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate form processing
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.remove('hidden');

    // Optionally clear the form
    this.reset();
  });
