export default class Card {
  constructor (data, templateSelector) {
      this._imagePath = data.imagePath;
      this._title = data.title;
      this._subtitle = data.subtitle;
      this._link = data.link;
      this._templateSelector = templateSelector;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.swiper-slide')
      .cloneNode(true);
    
    return cardElement;
  }

  generateCard() {
    this._card = this._getElement();

    this._cardImage = this._card.querySelector('.card__img');
    this._cardImage.src = this._imagePath;
    this._cardImage.alt = this._title;
    this._card.querySelector('.card__subtitle').textContent = this._subtitle;
    this._card.querySelector('.card__title').textContent = this._title;
    this._card.querySelector('.card__link').href = this._link;
    
    return this._card;
  }
}