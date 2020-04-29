// callbacks & forEach
// callback is passing a normal function into another funciton or another method as an argument

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);