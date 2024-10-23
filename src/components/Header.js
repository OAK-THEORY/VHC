export const Header = () => {
  const mainClass = 'header';

  const stickyMod = '_sticky';
  const header = document.querySelector(`.${mainClass}`);
  if (!header) return;

  const headerTop = header.querySelector(`.${mainClass}__top`);
  const headerBottom = header.querySelector(`.${mainClass}__bottom`);

  function removeStickyMode() {
    headerBottom.classList.remove(`${mainClass}__bottom` + stickyMod);
    header.classList.remove(mainClass + stickyMod);
  }
  function addStickyMode() {
    headerBottom.classList.add(`${mainClass}__bottom` + stickyMod);
    header.classList.add(mainClass + stickyMod);
  }
  function toggleStickyMode() {
    if (headerTop.offsetHeight <= window.scrollY) {
      addStickyMode();
    } else {
      removeStickyMode();
    }
  }
  function addWindowScrollListener() {
    window.addEventListener('scroll', toggleStickyMode);

  }
  function enableForDesktop() {
    if (window.scrollY <= headerTop.offsetHeight) {
      removeStickyMode();
    }
    addWindowScrollListener();
  }
  enableForDesktop()

  // For desktop only sticky header
  // if (window.innerWidth >= 767) enableForDesktop();
  // window.addEventListener('resize', () => {
  //   if (window.innerWidth < 767) {
  //     addStickyMode();
  //     window.removeEventListener('scroll', toggleStickyMode);

  //   } else {
  //     enableForDesktop();
  //   };
  // });
}