import { Popup } from "./Popup.js";

export type FormSubmitHandler = (data: Record<string, string>) => void;

export class PopupWithForm extends Popup {
  private handleFormSubmit: FormSubmitHandler;
  private form: HTMLFormElement;
  private inputs: HTMLInputElement[];

  constructor(popupSelector: string, handleFormSubmit: FormSubmitHandler) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.form = this.popup.querySelector(".popup__form") as HTMLFormElement;
    this.inputs = Array.from(this.form.querySelectorAll(".popup__input"));
  }

  private getInputValues(): Record<string, string> {
    const values: Record<string, string> = {};

    this.inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  public setEventListeners() {
    super.setEventListeners();

    this.form.addEventListener("submit", (evt: SubmitEvent) => {
      evt.preventDefault();
      this.handleFormSubmit(this.getInputValues());
    });
  }

  public close() {
    super.close();
    this.form.reset();
  }
}
