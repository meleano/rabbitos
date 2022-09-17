const hamburguesa = document.querySelector('.hamburguesa');
const navegador = document.querySelector('.navegador');

const ACTIVE = 'active';

hamburguesa.addEventListener('click', () => {
  hamburguesa.classList.toggle(ACTIVE);
  navegador.classList.toggle(ACTIVE);
});
