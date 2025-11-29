// Smooth toggle animation for dropdown panels

document.querySelectorAll('.button.toggle').forEach(button => {
  
  button.addEventListener('click', () => {
    
    const panel = button.nextElementSibling;
    
    // Close other open dropdowns
    document.querySelectorAll('.button.toggle.active').forEach(activeBtn => {
      if (activeBtn !== button) {
        activeBtn.classList.remove('active');
        const p = activeBtn.nextElementSibling;
        p.style.height = 0;
      }
    });

    // Toggle active state
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      panel.style.height = panel.scrollHeight + "px";
    } else {
      panel.style.height = 0;
    }
  });
});
