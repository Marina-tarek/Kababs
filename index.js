window.addEventListener('scroll', function () {
  const nav = document.querySelector('.wrap-menu-desktop');
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
