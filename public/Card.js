export class Card {
    constructor(data, templateSelector, handleCardClick) {
        this.name = data.name;
        this.link = data.link;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.element = this.getTemplate();
        this.title = this.element.querySelector(".card__title");
        this.image = this.element.querySelector(".card__image");
        this.likeButton = this.element.querySelector(".card__like-button");
        this.deleteButton = this.element.querySelector(".card__delete-button");
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.templateSelector);
        const cardElement = cardTemplate.content
            .querySelector(".card")
            ?.cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this.title.textContent = this.name;
        this.image.src = this.link;
        this.image.alt = this.name;
        this.setEventListeners();
        return this.element;
    }
    handleLike() {
        this.likeButton.classList.toggle("card__like-button_is-active");
    }
    handleDelete() {
        this.element.remove();
    }
    handleImageClick() {
        this.handleCardClick(this.name, this.link);
    }
    setEventListeners() {
        this.likeButton.addEventListener("click", () => this.handleLike());
        this.deleteButton.addEventListener("click", () => this.handleDelete());
        this.image.addEventListener("click", () => this.handleImageClick());
    }
}
