import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  private image: HTMLImageElement;
  private caption: HTMLElement;

  constructor(popupSelector: string) {
    super(popupSelector);
    this.image = this.popup.querySelector(".popup__image") as HTMLImageElement;
    this.caption = this.popup.querySelector(".popup__caption") as HTMLElement;
  }

  public open(name: string = "", link: string = "") {
    this.image.src = link;
    this.image.alt = name;
    this.caption.textContent = name;
    super.open();
  }
}
