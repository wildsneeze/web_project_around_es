import { showInputError, hideInputError, checkInputValidity } from './validate.js';

const initialCards = [
  {
    name: 'Valle de Yosemite',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg'
  },
  {
    name: 'Lago Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg'
  },
  {
    name: 'Montañas Calvas',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg'
  },
  {
    name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg'
  },
  {
    name: 'Parque Nacional de la Vanoise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg'
  },
  {
    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg'
  }
]



const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('#edit-popup');
const cardTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.cards__list');
const addCardButton = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('#image-popup');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close');
const newCardPopup = document.querySelector('#new-card-popup');
const newCardForm = document.querySelector('#new-card-form');
const closeNewCardPopupButton = newCardPopup.querySelector('.popup__close');
const closePopupButton = editPopup.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileForm = document.querySelector('#edit-profile-form')
const nameInput = profileForm.querySelector('.popup__input_type_name');
const descriptionInput = profileForm.querySelector('.popup__input_type_description');

initialCards.forEach((card) => {
  renderCard(card, cardsList);
});

function openModal(modal) {
  modal.classList.add('popup_is-opened');
}

function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}

editButton.addEventListener('click', function() {
  handleOpenEditModal()
});

closePopupButton.addEventListener('click', function() {
  closeModal(editPopup);
});

imagePopupCloseButton.addEventListener('click', function() {
  closeModal(imagePopup);
});

function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}

profileForm.addEventListener('submit', function(evt) {
  handleProfileFormSubmit(evt);
});

function getCardElement({name = 'Sin título', link='./images/placeholder.jpg'}={}) {
  const cardElement = cardTemplate.content.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
   cardElement.querySelector('.card__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
  });
   cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__image').addEventListener('click', function() {
    imagePopupImage.src = link;
    imagePopupImage.alt = name;
    imagePopupCaption.textContent = name;
    openModal(imagePopup);
  });
  
  return cardElement;
}

function renderCard({name, link}, container){
  const cardElement = getCardElement({name, link});
  container.prepend(cardElement);
}

addCardButton.addEventListener('click', function() {
  openModal(newCardPopup);
});

closeNewCardPopupButton.addEventListener('click', function() {
  closeModal(newCardPopup);
});

function handleCardFormSubmit(evt) { 
  evt.preventDefault();
  const name = newCardForm.querySelector('.popup__input_type_card-name').value;
  const link = newCardForm.querySelector('.popup__input_type_url').value;
  renderCard({name, link}, cardsList);
  closeModal(newCardPopup);
  newCardForm.reset();

}

newCardForm.addEventListener('submit', function(evt) {
  handleCardFormSubmit(evt);
});
