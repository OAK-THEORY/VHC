import Card from "./Card";
import Section from "./Section";

export const catalog = (id, data) => {
  function createNewCard(data) {
    const card = new Card(data, '#slide-card-template');
    return card.generateCard();
  }
  
  const cardList = new Section({
    renderer: (item) => {
        cardList.setItem(createNewCard(item));
    },
  }, `${id} .catalog__swiper .swiper-wrapper`);
  cardList.renderItems(data);
}