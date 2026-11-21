export interface CardData {
  name: string;
  link: string;
}

export type HandleCardClick = (name: string, link: string) => void;

export class Card {
  private name: string;
  private link: string;
  private templateSelector: string;
  private handleCardClick: HandleCardClick;
  private element: HTMLElement;

  constructor(
    data: CardData,
    templateSelector: string,
    handleCardClick: HandleCardClick,
  ) {
    this.name = data.name;
    this.link = data.link;
    this.templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this.element = this.getTemplate();
  }

  private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.templateSelector,
    ) as HTMLTemplateElement;
    const cardElement = cardTemplate.content
      .querySelector(".card")
      ?.cloneNode(true) as HTMLElement;
    return cardElement;
  }

  public generateCard(): HTMLElement {
    const cardTitle = this.element.querySelector(".card__title") as HTMLElement;
    cardTitle.textContent = this.name;
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    cardImage.src = this.link;
    cardImage.alt = this.name;
    this.setEventListeners();
    return this.element;
  }

  private handleLike() {
    const likeButton = this.element.querySelector(
      ".card__like-button",
    ) as HTMLButtonElement;
    likeButton.classList.toggle("card__like-button_is-active");
  }

  private handleDelete() {
    this.element.remove();
  }

  private handleImageClick() {
    this.handleCardClick(this.name, this.link);
  }

  private setEventListeners() {
    const likeButton = this.element.querySelector(
      ".card__like-button",
    ) as HTMLButtonElement;
    const deleteButton = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLButtonElement;
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;

    likeButton.addEventListener("click", () => this.handleLike());
    deleteButton.addEventListener("click", () => this.handleDelete());
    cardImage.addEventListener("click", () => this.handleImageClick());
  }
}
