export class Popup {
  protected popup: HTMLElement;

  constructor(popupSelector: string) {
    this.popup = document.querySelector(popupSelector) as HTMLElement;
  }

  public open() {
    this.popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this.handleEscClose);
  }

  public close() {
    this.popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this.handleEscClose);
  }

  private handleEscClose = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  public setEventListeners() {
    const closeButton = this.popup.querySelector(
      ".popup__close",
    ) as HTMLButtonElement;

    closeButton.addEventListener("click", () => {
      this.close();
    });

    this.popup.addEventListener("mousedown", (evt: MouseEvent) => {
      if (evt.target === this.popup) {
        this.close();
      }
    });
  }
}
