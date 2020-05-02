const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  // trim() => TO REMOVE ANY WHITE SPACES BEFORE OR AFTER THE STRING
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    // reset() => RESET ALL THE INPUT FIELDS INSIDE THAT FORM
    addForm.reset();
  }

});