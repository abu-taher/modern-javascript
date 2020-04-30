// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('success');

const paras = document.querySelectorAll('p');

/*
* THE DIFFERENCE BETWEEN innerText & textContent:
- innerText => will get all of the texts that are visible in the web page
- textContent => will get all of the texts inside the tag regardless of wheter it is hidden or not
*/
paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});

// TOGGLING CLASSES
const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');