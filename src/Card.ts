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
  private title: HTMLElement;
  private image: HTMLImageElement;
  private likeButton: HTMLButtonElement;
  private deleteButton: HTMLButtonElement;

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
    this.title = this.element.querySelector(".card__title") as HTMLElement;
    this.image = this.element.querySelector(".card__image") as HTMLImageElement;
    this.likeButton = this.element.querySelector(
      ".card__like-button",
    ) as HTMLButtonElement;
    this.deleteButton = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLButtonElement;
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
    this.title.textContent = this.name;
    this.image.src = this.link;
    this.image.alt = this.name;
    this.setEventListeners();
    return this.element;
  }

  private handleLike() {
    this.likeButton.classList.toggle("card__like-button_is-active");
  }

  private handleDelete() {
    this.element.remove();
  }

  private handleImageClick() {
    this.handleCardClick(this.name, this.link);
  }

  private setEventListeners() {
    this.likeButton.addEventListener("click", () => this.handleLike());
    this.deleteButton.addEventListener("click", () => this.handleDelete());
    this.image.addEventListener("click", () => this.handleImageClick());
  }
}
