export const Navigation = () => {
  const mainClass = 'navigation';
  const activeClass = '_active';
  const navigation = document.querySelector(`.${mainClass}`);
  if (!navigation) return;

  const button = navigation.querySelector(`.${mainClass}__button`);
  const list = navigation.querySelector(`.${mainClass}__list_mobile`);
  const links = navigation.querySelectorAll(`.${mainClass}__link`);

  function removeActiveClass() {
    button.classList.remove(button.classList[0] + activeClass);
    list.classList.remove(list.classList[0] + activeClass);
  }

  function toggleActiveClasses() {
    button.classList.toggle(button.classList[0] + activeClass);
    list.classList.toggle(list.classList[0] + activeClass);
  }

  button.addEventListener('click', toggleActiveClasses);

  window.addEventListener('click', (e) => {
    if (![...e.target.classList].some(i => i.includes(mainClass))) removeActiveClass();
  });

  links.forEach((link) => {
    link.addEventListener('click', removeActiveClass);
  })
}