import AbstractView from '../../abstract-view';
import renderHeader from '../../header/header';

export default class extends AbstractView {
  get template() {
    return `
    ${renderHeader()}
    <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
  }

  bind() {
    const backBtnNode = this.element.querySelector(`.back`);
    const nameNode = this.element.querySelector(`.rules__input`);
    const goBtnNode = this.element.querySelector(`.rules__button`);

    nameNode.addEventListener(`input`, () => {
      goBtnNode.disabled = nameNode.value.length === 0;
    });

    goBtnNode.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onStartGame();
    });

    backBtnNode.addEventListener(`click`, () => {
      this.onBack();
    });
  }

  onStartGame() {

  }

  onBack() {

  }
}
