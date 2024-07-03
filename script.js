document.addEventListener('DOMContentLoaded', function() {
    const splash = document.querySelector('.splash');
  
    splash.addEventListener('animationend', function() {
      splash.style.display = 'none';
    });
  });
  