window.addEventListener('load', () => {
  // Header
  const header = document.querySelector('header');
  const headerContainer = document.querySelector('.header-container');
  const hederOffsetTopPx = getComputedStyle(document.documentElement).getPropertyValue('--header-margin-top');

  if (header) {
    window.addEventListener('scroll', onWindowScroll)
    onWindowScroll();
  }

  function onWindowScroll() {
    if (window.scrollY >= 20 || window.innerWidth <= 576) {
      headerContainer.classList.add('container-fluid');
      headerContainer.classList.remove('container');

      header.style.top = `0px`;

      return;
    }

    headerContainer.classList.add('container');
    headerContainer.classList.remove('container-fluid');

    header.style.top = hederOffsetTopPx;
  }


  // Products
  const productsTabs = document.querySelectorAll('.products-tabs li');
  productsTabs.forEach(li => li.addEventListener('click', () => {
    clearActive()
    li.classList.add('active');
  }))

  function clearActive() {
    productsTabs.forEach(li => li.classList.remove('active'));
  }
})



