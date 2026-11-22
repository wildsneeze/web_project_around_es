import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import type { CardData } from "./Card.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { defaultFormConfig, initialCards } from "./utils/constants.js";

const editButton = document.querySelector(
  ".profile__edit-button",
) as HTMLButtonElement;
const addCardButton = document.querySelector(
  ".profile__add-button",
) as HTMLButtonElement;
const profileForm = document.querySelector(
  "#edit-profile-form",
) as HTMLFormElement;
const newCardForm = document.querySelector("#new-card-form") as HTMLFormElement;
const nameInput = profileForm.querySelector(
  ".popup__input_type_name",
) as HTMLInputElement;
const descriptionInput = profileForm.querySelector(
  ".popup__input_type_description",
) as HTMLInputElement;

const profileValidator = new FormValidator(defaultFormConfig, profileForm);
const newCardValidator = new FormValidator(defaultFormConfig, newCardForm);

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage("#image-popup");

function handleCardClick(name: string, link: string) {
  imagePopup.open(name, link);
}

function createCard(data: CardData): HTMLElement {
  const card = new Card(data, "#card-template", handleCardClick);
  return card.generateCard();
}

const cardSection: Section<CardData> = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  ".cards__list",
);

const profilePopup: PopupWithForm = new PopupWithForm(
  "#edit-popup",
  (data) => {
    userInfo.setUserInfo({ name: data.name, job: data.description });
    profilePopup.close();
  },
);

const newCardPopup: PopupWithForm = new PopupWithForm(
  "#new-card-popup",
  (data) => {
    cardSection.addItem(createCard({ name: data.name, link: data.link }));
    newCardPopup.close();
  },
);

editButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = job;
  profileValidator.resetValidation();
  profilePopup.open();
});

addCardButton.addEventListener("click", () => {
  newCardValidator.resetValidation();
  newCardPopup.open();
});

imagePopup.setEventListeners();
profilePopup.setEventListeners();
newCardPopup.setEventListeners();

profileValidator.enableValidation();
newCardValidator.enableValidation();

cardSection.renderItems();
