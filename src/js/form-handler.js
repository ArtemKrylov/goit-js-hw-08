import throttle from 'lodash.throttle';

export default class FormHandler {
  #regExCheckEmail;
  #regExEmptyString;
  #feedbackFormEl;
  #isActive;

  constructor(formName) {
    this.#isActive = true;
    this.#regExCheckEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    this.#regExEmptyString = /^\s*$/g;
    this.#feedbackFormEl = document.forms[formName];
    this.feedBackFormState = {};
    //autofilling form input and textarea fields from local storage on page upload
    this.#formAutoFill();

    this.#feedbackFormEl.addEventListener(
      'input',
      throttle(this.#onFeedbackFormElInput.bind(this), 500)
    );
    this.#feedbackFormEl.addEventListener(
      'submit',
      this.#onFeedbackFormSubmit.bind(this)
    );
  }

  get isActive() {
    return this.#isActive;
  }

  //inactivate submit buttons
  inactivate() {
    if (!this.#isActive) {
      console.log('form is inactivated previously');
      return;
    }

    this.#isActive = false;
    this.#feedbackFormEl
      .querySelectorAll('button[type="submit"]')
      .forEach(el => (el.disabled = true));
    console.log('inactivated');
  }

  //activate submit buttons
  activate() {
    if (this.#isActive) {
      console.log('form is already activated');
      return;
    }
    this.#isActive = true;
    this.#feedbackFormEl
      .querySelectorAll('button[type="submit"]')
      .forEach(el => (el.disabled = false));
    console.log('activated');
  }

  //update form state using localStorage data
  #updateFormState() {
    let currentStoredState;
    try {
      currentStoredState = JSON.parse(
        localStorage.getItem('feedback-form-state')
      );
    } catch (error) {
      console.error(error);
    }

    this.feedBackFormState = currentStoredState ? currentStoredState : {};
  }

  //fill form using local storage data
  #formAutoFill() {
    this.#updateFormState();
    [...this.#feedbackFormEl.elements].forEach(element => {
      element.value = this.feedBackFormState[element.name] || '';
    });
  }

  //callback for input event listener on form
  #onFeedbackFormElInput({ target: { name, value } }) {
    //if form element value is an empty string - don`t change local storage
    if (!value) return;
    this.feedBackFormState[name] = value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(this.feedBackFormState)
    );
  }

  //callback for submit event listener on form
  #onFeedbackFormSubmit(event) {
    event.preventDefault();
    //if the form is empty - prevent submitting
    if (!this.#validateForm()) {
      console.log('Fill the form correctly!');
      return;
    }
    console.log('Form data:');
    console.table(this.feedBackFormState);
    this.feedBackFormState = {};
    localStorage.removeItem('feedback-form-state');
    this.#resetForm();
  }

  //check if the form is filled correctly
  // returns true is email is written correctly and message is not empty
  //if invalid - returns false and shows invalid input with red outline
  #validateForm() {
    let isValid = true;
    if (
      this.#regExEmptyString.test(this.#feedbackFormEl.elements.email.value) &&
      this.#regExEmptyString.test(this.#feedbackFormEl.elements.message.value)
    ) {
      this.#showInvalidInput(this.#feedbackFormEl.elements.email);
      this.#showInvalidInput(this.#feedbackFormEl.elements.message);
      console.log('Invalid message. Email and message field must not be empty');
      return false;
    }

    if (
      !this.#regExCheckEmail.test(
        String(this.#feedbackFormEl.elements.email.value)
      )
    ) {
      this.#showInvalidInput(this.#feedbackFormEl.elements.email);
      console.log('Invalid email');
      isValid = false;
    } else {
      this.#feedbackFormEl.elements.email.style.outline = 'none';
    }

    if (
      this.#regExEmptyString.test(
        String(this.#feedbackFormEl.elements.message.value)
      )
    ) {
      this.#showInvalidInput(this.#feedbackFormEl.elements.message);
      console.log('Invalid message. Message field must not be empty');
      isValid = false;
    } else {
      this.#feedbackFormEl.elements.message.style.outline = 'none';
    }

    return isValid;
  }
  //adds red outline
  #showInvalidInput(invalidElement) {
    invalidElement.style.outline = '1px solid red';
  }

  //function to reset form fields and remove outlines (if incorrect inputs)
  #resetForm() {
    this.#feedbackFormEl.elements.email.style.outline = 'none';
    this.#feedbackFormEl.elements.message.style.outline = 'none';
    this.#feedbackFormEl.reset();
  }
}
