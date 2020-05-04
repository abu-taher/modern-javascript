const list = document.querySelector('ul');

const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li>
      <div>${recipe.title}</div>
      <div><small>${time}</small></div>
    </li>
  `;

  list.innerHTML += html;
};

// db.collection('recipes').get() => THIS IS A sync TASK AND WHAT THIS DOES IS RETURN A promise, SO WE CAN CHAIN .then() WITH IT
db.collection('recipes').get().then(snapshot => {
  // console.log(snapshot);
  snapshot.docs.forEach(doc => {
    // console.log(doc.data());
    addRecipe(doc.data());
  });
}).catch(err => {
  console.log(err);
});