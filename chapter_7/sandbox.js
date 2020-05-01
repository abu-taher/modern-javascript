// WHEN WE ARE LISTENING FOR A SUBMIT EVENT, WE DON'T ATTACH OUR EVENT LISTENER TO THE SUBMIT BUTTON, INSTEAD WE ATTACH IT TO THE FORM
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  // TO PREVENT THE PAGE FROM REFRESHING
  e.preventDefault();
  // console.log('form submitted');
  // console.log(username.value);

  // THIS WAY IS NOT NEEDING TO CATCH THE username INPUT AND SAVE IT TO THE VARIABLE AS THAT ONE ON THE ABOVE, BUT NOTICE THIS WAY IS NEED TO DEFINE name OR id ATTRIBUTE IN THE INPUT HTML FIELD
  console.log(form.username.value);
});