const throttle = require('lodash.throttle');

const LOCAL_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

populateFormInput();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log('Отправляем форму', formData);
  localStorage.removeItem(LOCAL_KEY);
}
function onFormInput(event) {
  const formData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  console.log(formData);
  console.log(refs.form.elements);

  // formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData.email));
}

function getSaveInputs() {
  JSON.parse(localStorage.getItem(LOCAL_KEY));
}

function populateFormInput(form) {
  const formData = getSaveInputs(LOCAL_KEY);
  if (!formData) {
    return;
  }
  for (const key in formData) {
    form.elements[key].value = formData[key];
  }
}
