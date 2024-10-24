import { tooltipMainSelectors } from "../data/tooltipMainClasses";
const isDesktop = window.innerWidth >= 767;

export function TooltipInit(containerId, productsArray) {

  const container = document.querySelector(`#${containerId}`);
  if (!container) return;
  const tooltipButtons = container.querySelectorAll(tooltipMainSelectors.tooltipButton);
  const containerWrapper = container.querySelector(`.${tooltipMainSelectors.containerWrapper}`);
  if (!tooltipButtons.length > 0 || !containerWrapper) return;
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains(tooltipMainSelectors.background)) {
      removeActiveClasses(containerWrapper);
    }
  })

  tooltipButtons.forEach((button, index) => {
    const card = createTooltipCard(button, productsArray[index]);
    isDesktop ? setItem(button.parentNode, card, tooltipMainSelectors.tooltipCardDesktop) : setItem(containerWrapper, card, tooltipMainSelectors.tooltipCardMobile);

    button.addEventListener('click', () => {
      tooltipButtonClickHandler(button, containerWrapper)
    })

  })
}

function tooltipButtonClickHandler(button, containerWrapper) {
  removeActiveClasses(containerWrapper);

  button.classList.add(tooltipMainSelectors.active);
  if (isDesktop) {
    button.parentNode.querySelector(`.${tooltipMainSelectors.tooltipCard}`).classList.add(tooltipMainSelectors.active);

  } else {
    containerWrapper.querySelector(`.${tooltipMainSelectors.tooltipCard}#${button.getAttribute("aria-labelledby")}`).classList.add(tooltipMainSelectors.tooltipCardActive);
    containerWrapper.classList.add(tooltipMainSelectors.containerWrapperActive);
  }

}
function setItem(container, item, addClass) {
  item.classList.add(addClass);
  container.append(item);
}
function createTooltipCard(button, data) {
  const card = getElement(tooltipMainSelectors.tooltipCardTemplate, tooltipMainSelectors.tooltipCard);
  card.querySelector(tooltipMainSelectors.tooltipCardTitle).textContent = data.title;
  card.querySelector(tooltipMainSelectors.tooltipCardLink).href = data.link;
  card.setAttribute("id", button.getAttribute("aria-labelledby"));
  return card;
}
function getElement(templateId, elementClass) {
  const element = document
    .querySelector(templateId)
    .content
    .querySelector(`.${elementClass}`)
    .cloneNode(true);

  return element;
}
function removeActiveClasses(containerWrapper) {
  containerWrapper.querySelector(`.${tooltipMainSelectors.tooltipCard}.${tooltipMainSelectors.active}`)?.classList.remove(tooltipMainSelectors.active);
  containerWrapper.querySelector(`${tooltipMainSelectors.tooltipButton}.${tooltipMainSelectors.active}`)?.classList.remove(tooltipMainSelectors.active);
  containerWrapper.classList.remove(tooltipMainSelectors.active);
}