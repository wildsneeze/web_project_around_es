export class Card {
    constructor(data, templateSelector, handleCardClick) {
        this.name = data.name;
        this.link = data.link;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.element = this.getTemplate();
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.templateSelector);
        const cardElement = cardTemplate.content
            .querySelector(".card")
            ?.cloneNode(true);
        return cardElement;
    }
    generateCard() {
        const cardTitle = this.element.querySelector(".card__title");
        cardTitle.textContent = this.name;
        const cardImage = this.element.querySelector(".card__image");
        cardImage.src = this.link;
        cardImage.alt = this.name;
        this.setEventListeners();
        return this.element;
    }
    handleLike() {
        const likeButton = this.element.querySelector(".card__like-button");
        likeButton.classList.toggle("card__like-button_is-active");
    }
    handleDelete() {
        this.element.remove();
    }
    handleImageClick() {
        this.handleCardClick(this.name, this.link);
    }
    setEventListeners() {
        const likeButton = this.element.querySelector(".card__like-button");
        const deleteButton = this.element.querySelector(".card__delete-button");
        const cardImage = this.element.querySelector(".card__image");
        likeButton.addEventListener("click", () => this.handleLike());
        deleteButton.addEventListener("click", () => this.handleDelete());
        cardImage.addEventListener("click", () => this.handleImageClick());
    }
}
