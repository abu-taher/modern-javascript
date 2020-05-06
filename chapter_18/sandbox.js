// sets => A NEW DATA STRUCTURE IN THE OBJECT CATEGORY AND ALLOWS TO STORE A LIST OF ANY KIND OF UNIQUE VALUES, IT'S A BIT LIKE ARRAYS BUT THEY DON'T ALLOW DUPLICATE VALUES
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

// const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
const namesSet = new Set(namesArray);
console.log(namesSet);

// const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
// ADD ELEMENT TO Set
ages.add(20);
ages.add(25).add(30);
ages.add(25);
// DELETE ELEMENT TO Set
ages.delete(30)

// TO FIND OUT THE LENGTH OF THE Set
console.log(ages, ages.size);
// TO CHECK IF THIS Set HAS A CERTIN VALUE INSIDE IT
console.log(ages.has(30), ages.has(20));

// TO REMOVE ALL VALUES FROM THE Set
ages.clear();
console.log(ages);

const ninjas = new Set([
  {name: 'shaun', age: 30},
  {name: 'crystal', age: 29},
  {name: 'chun-li', age: 32}
]);

ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age);
});
