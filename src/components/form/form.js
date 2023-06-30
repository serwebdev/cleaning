class Dropdown {
  // Свойства объекта, заданные по умолчанию
  defaultOptions = {
    isColorItem: true,
  };

  constructor(selector, options) {
    this.options = Object.assign(this.defaultOptions, options);
    // Главный элемент, в котором ищутся все остальные
    this.dropdown = document.querySelector(selector);

    // Если нет элемента на странице, дальше код не выполняется
    if (!this.dropdown) return;

    this.back = this.dropdown.querySelector('.dropdown__back');
    this.btn = this.dropdown.querySelector('.dropdown__btn');
    this.menu = this.dropdown.querySelector('.dropdown__menu');
    this.menuItem = this.dropdown.querySelectorAll('.dropdown__item');

    // Точка входа
    this.init();
  }

  // Запускает приложение
  init() {
    this.toggleBtn();
    this.activeMenuItem();
    this.closeClickBack();
  }

  // Проверяет открыто ли меню
  isMenuShow() {
    return this.menu.classList.contains('show') ? true : false;
  }

  // Открывает меню
  openMenu() {
    this.menu.classList.add('show');
    this.btn.classList.add('show');
    this.back.classList.add('show');
  }
  // Закрывает меню
  closeMenu() {
    this.menu.classList.remove('show');
    this.btn.classList.remove('show');
    this.back.classList.remove('show');
  }

  // Клик по кнопке, откр. или закр. меню
  toggleBtn() {
    this.btn.addEventListener('click', () => {
      if (!this.isMenuShow()) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    });
  }

  // Закрывает меню по клику за пределами меню
  closeClickBack() {
    window.addEventListener('click', e => {
      if (e.target.classList.contains('dropdown__back')) {
        this.closeMenu();
      }
    });
  }

  // Делает активным пункт меню
  activeMenuItem() {
    this.menuItem.forEach(item => {
      item.addEventListener('click', () => {
        this.btn.textContent = item.textContent;
        if (this.options.isColorItem) {
          this.menuItem.forEach(elem => {
            elem.classList.remove('active');
          });
          item.classList.add('active');
        }
        this.closeMenu();
      });
    });
  }
}

const dd = new Dropdown('.dropdown', { isColorItem: true });

(function () {
  const room = document.querySelector('.room');
  if (!room) return;
  const minusBtn = room.querySelector('.room__btn--minus');
  const plusBtn = room.querySelector('.room__btn--plus');
  const roomInput = room.querySelector('.room__input');

  let roomCount = 1;
  roomInput.value = roomCount;

  minusBtn.addEventListener('click', () => {
    roomCount = roomInput.value;
    roomCount--;
    if (roomCount <= 1) {
      minusBtn.disabled = true;
    } else {
      minusBtn.disabled = false;
    }
    roomInput.value = roomCount;
  });

  plusBtn.addEventListener('click', () => {
    roomCount = roomInput.value;
    roomCount++;
    if (roomCount > 1) {
      minusBtn.disabled = false;
    }
    roomInput.value = roomCount;
  });
})();
