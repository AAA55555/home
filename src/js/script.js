window.addEventListener('DOMContentLoaded', function () {
  // Accordion

  let acc = document.querySelectorAll('.answers__header'),
    plus = document.querySelectorAll('.answers__plus');

  for (let i = 0; i < acc.length; i++) {
    for (let j = 0; j < plus.length; j++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          plus[i].classList.remove('active-plus');
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          plus[i].classList.add('active-plus');
        }
      });
    }
  }

  // scroll

  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 82;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  // pageup

  window.addEventListener('scroll', () => {
    let promo = document.querySelector('.pageup'),
      promoHeight = window.innerHeight + 25;
    let i = promo.getBoundingClientRect().top + pageYOffset;
    if (i > promoHeight) {
      promo.classList.add('active-pageup');
    }
    if (i < promoHeight) {
      promo.classList.remove('active-pageup');
    }
  });

  //nav

  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
  });
});
