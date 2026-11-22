import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.image = this.popup.querySelector(".popup__image");
        this.caption = this.popup.querySelector(".popup__caption");
    }
    open(name = "", link = "") {
        this.image.src = link;
        this.image.alt = name;
        this.caption.textContent = name;
        super.open();
    }
}
