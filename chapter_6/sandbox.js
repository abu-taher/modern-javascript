const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

// ADD AN EXTRA STYLE
title.style.margin = '50px';
// UPDATE AN EXISTING STYLE
title.style.color = 'crimson';
title.style.fontSize = '60px';
// REMOVE AN EXISTING STYLE
title.style.margin = '';