export interface FormConfig {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
}

export class FormValidator {
  private config: FormConfig;
  private formElement: HTMLFormElement;
  private inputList: HTMLInputElement[];
  private buttonElement: HTMLButtonElement;

  constructor(config: FormConfig, formElement: HTMLFormElement) {
    this.config = config;
    this.formElement = formElement;
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.config.inputSelector),
    );
    this.buttonElement = this.formElement.querySelector(
      this.config.submitButtonSelector,
    ) as HTMLButtonElement;
  }

  private showInputError(inputElement: HTMLInputElement, errorMessage: string) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`,
    ) as HTMLElement;
    inputElement.classList.add(this.config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.config.errorClass);
  }

  private hideInputError(inputElement: HTMLInputElement) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`,
    ) as HTMLElement;
    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.config.errorClass);
  }

  private checkInputValidity(inputElement: HTMLInputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  private hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  private toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.buttonElement.classList.add(this.config.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this.config.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  }

  private setEventListeners() {
    this.toggleButtonState();
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  public enableValidation() {
    this.setEventListeners();
  }

  public resetValidation() {
    this.inputList.forEach((inputElement) => {
      this.hideInputError(inputElement);
    });
    this.toggleButtonState();
  }
}
