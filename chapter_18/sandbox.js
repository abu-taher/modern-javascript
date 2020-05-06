// rest parameter => ALLOWS US TO BUNDLE UP ARGUMENTS INSIDE A FUNCTION INTO A SINGLE ARRAY PARAMETER
const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num*2);
};

const result = double(1,3,5,7,2,4,6,8);
console.log(result);

// spread syntax (arrays) => TO SPREAD OUT AN ARRAY INTO IT'S INDEVIDUAL COMPONENTS (OPPOSITE OF REST PARAMETER)
const people = ['shaun', 'ryu', 'chun-li'];
const members = ['mario', 'luigi', ...people];
console.log(members);

// spread syntax (objects) => TO SPREAD OUT AN OBJECT INTO IT'S INDEVIDUAL COMPONENTS (OPPOSITE OF REST PARAMETER)
const person = { name: 'shaun', age: 30, job: 'net ninja' };
const personClone = { ...person, location: 'manchester' };
console.log(person, personClone);