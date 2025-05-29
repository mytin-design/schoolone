
  window.addEventListener('scroll', function() {
    const quoteSection = document.querySelector('.quote');
    const rect = quoteSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      quoteSection.classList.add('visible');
    }
  });


  //For news and events scrolling

  
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');
  const newsGrid = document.querySelector('.news-grid');

  leftBtn.addEventListener('click', () => {
    newsGrid.scrollBy({ left: -320, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    newsGrid.scrollBy({ left: 320, behavior: 'smooth' });
  });


