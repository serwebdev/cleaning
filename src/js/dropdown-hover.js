function dropdownHover(selector) {
  const dropdownHover = document.querySelector(selector);
  if (!dropdownHover) return;
  const dropdownTop = dropdownHover.querySelector('.dropdown-hover__top');
  const dropdownTopText = dropdownHover.querySelector(
    '.dropdown-hover__top-text'
  );
  const svg = dropdownHover.querySelector('.dropdown-hover__top svg');
  const dropdownMenu = dropdownHover.querySelector('.dropdown-hover__menu');
  const dropdownMenuItem = dropdownHover.querySelectorAll(
    '.dropdown-hover__menu-item'
  );

  // Открывает меню
  function openMenu() {
    dropdownMenu.classList.add('show');
    svg.classList.add('active');
  }

  // Закрывает меню
  function closeMenu() {
    dropdownMenu.classList.remove('show');
    svg.classList.remove('active');
  }

  // Показываем выпадающее меню при наведении на верхнюю часть дропдауна
  dropdownTop.addEventListener('mouseenter', openMenu);

  // Показываем выпадающее меню при наведении на весь дропдаун
  dropdownHover.addEventListener('mouseenter', openMenu);

  // Скрываем выпадающее меню когда мышь ушла с дропдауна
  dropdownHover.addEventListener('mouseleave', closeMenu);

  // При клике на пункт меню, делаем его активным и закрываем меню
  dropdownMenuItem.forEach(item => {
    item.addEventListener('click', () => {
      dropdownMenuItem.forEach(all => {
        all.classList.remove('active');
      });
      item.classList.add('active');
      dropdownTopText.textContent = item.textContent;
      closeMenu();
    });
  });
}

dropdownHover('.place-dropdown');
