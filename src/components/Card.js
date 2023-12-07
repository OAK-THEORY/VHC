export default class Card {
  constructor(data, templateSelector) {
    this._imagePath = data.imagePath;
    this._title = data.title;
    this._subtitle = data.subtitle;
    this._link = data.link;
    this._discount = data.discount;
    this._templateSelector = templateSelector;
    if (this._discount) {
      this._label = data.label;
      this._discountInfo = data.discountInfo;
      this._discountCode = data.discountCode;
    }
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

    if (this._discount) {
      const labelElement = this._card.querySelector('.card__label');
      const discountInfoElement = this._card.querySelector('.card__discount-info');
      const discountCodeElement = this._card.querySelector('.card__discount-code');
      const discountElement = this._card.querySelector('.card__discount');

      if (this._label !== null && labelElement) {
        labelElement.textContent = this._label;
        labelElement.classList.add('active');
      }

      if (this._discountInfo !== null && discountInfoElement) {
        discountInfoElement.textContent = this._discountInfo;
      }

      if (this._discountCode !== null && discountCodeElement) {
        discountCodeElement.textContent = this._discountCode;
      }
      discountElement.classList.add('active');
    }


    return this._card;
  }
}