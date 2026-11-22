export class Popup {
    constructor(popupSelector) {
        this.handleEscClose = (evt) => {
            if (evt.key === "Escape") {
                this.close();
            }
        };
        this.popup = document.querySelector(popupSelector);
    }
    open() {
        this.popup.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    close() {
        this.popup.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }
    setEventListeners() {
        const closeButton = this.popup.querySelector(".popup__close");
        closeButton.addEventListener("click", () => {
            this.close();
        });
        this.popup.addEventListener("mousedown", (evt) => {
            if (evt.target === this.popup) {
                this.close();
            }
        });
    }
}
