// Faq
/*
Name: Payal patel
  Student Number: C0959412
*/

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
