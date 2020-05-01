const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);  
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation(); // THAT IS GOING TO STOP THE EVENT BUBBLING UP FROM THIS POINT
//     e.target.remove();
//   });
// });

// EVENT DELEGATION
ul.addEventListener('click', e => {
  // console.log('event in UL');
  console.log(e.target, e);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});




