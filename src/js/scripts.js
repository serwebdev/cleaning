const inputPhone = document.querySelectorAll('.form__input--phone');

inputPhone.forEach(phone => {
  const im = new Inputmask('+7 (999) 999 99 99');
  im.mask(phone);
});
