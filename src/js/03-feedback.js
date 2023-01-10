import throttle from 'lodash.throttle';
// import isEmail from 'validator/lib/isemail';
// import isEmpty from 'validator/lib/isEmpty';

const feedbackFormEl = document.querySelector('.feedback-form');
let feedBackFormState = {};

//update form state using localStorage data
function updateFormState() {
  let currentStoredState;
  try {
    currentStoredState = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
  } catch (error) {
    console.error(error);
  }

  feedBackFormState = currentStoredState ? currentStoredState : {};
}

//fill form using local storage data
function formAutoFill() {
  updateFormState();
  [...feedbackFormEl.elements].forEach(element => {
    element.value = feedBackFormState[element.name] || '';
  });
}

//callback function for input event listener on form
function onFeedbackFormElInput({ target: { name, value } }) {
  //if form element value is an empty string - don`t change local storage
  if (!value) return;
  feedBackFormState[name] = value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedBackFormState)
  );
}

//callback function for submit event listener on form
function onFeedbackFormSubmit(event) {
  event.preventDefault();
  //if the form is empty - prevent submitting
  // if (!validateForm()) {
  //   console.log('Fill the form correctly!');
  //   return;
  // }
  console.log('Form data:');
  console.table(feedBackFormState);
  feedBackFormState = {};
  localStorage.removeItem('feedback-form-state');
  resetForm();
}

// function validateForm() {
//   let isValid = true;
//   if (!isEmail(String(feedbackFormEl.elements.email.value))) {
//     showInvalidInput(feedbackFormEl.elements.email);
//     console.log('Invalid email');
//     isValid = false;
//   } else {
//     feedbackFormEl.elements.email.style.outline = 'none';
//   }
//   if (isEmpty(String(feedbackFormEl.elements.message.value))) {
//     showInvalidInput(feedbackFormEl.elements.message);
//     console.log('Invalid message. Message field must not be empty');
//     isValid = false;
//   } else {
//     feedbackFormEl.elements.message.style.outline = 'none';
//   }
//   return isValid;
// }

function showInvalidInput(invalidElement) {
  invalidElement.style.outline = '1px solid red';
}

function resetForm() {
  feedbackFormEl.elements.email.style.outline = 'none';
  feedbackFormEl.elements.message.style.outline = 'none';
  feedbackFormEl.reset();
}

//autofilling form input and textarea fields from local storage on page upload
formAutoFill();

feedbackFormEl.addEventListener('input', throttle(onFeedbackFormElInput, 500));
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
