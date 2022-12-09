import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
};

populateFormInput();

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

populateFormInput();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem(LOCAL_KEY);
}
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function getSaveInputs(key) {
  return JSON.parse(localStorage.getItem(key));
}

function populateFormInput() {
  const formData = getSaveInputs(LOCAL_KEY);
  if (!formData) {
    // console.log('нет данніх в хранилище');
    return;
  }
  for (const key in formData) {
    refs.form.elements[key].value = formData[key];
  }
}
