document.addEventListener('DOMContentLoaded', function() {
    const profilButton = document.querySelector('.profil');
    profilButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const confirmation = confirm('Apakah Anda ingin melihat profil saya?');
      if (confirmation) {
        window.location.href = 'profil.html';
      } else {
        window.location.href = 'index.html'; // Redirect to index page
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const profilButton = document.querySelector('.schedule');
    profilButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const confirmation = confirm('Apakah Anda ingin melihat schedule saya?');
      if (confirmation) {
        window.location.href = 'schedule.html';
      } else {
        window.location.href = 'index.html'; // Redirect to index page
      }
    });
  });