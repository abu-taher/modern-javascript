//const before = new Date('02/01/2019 7:30:59');

// CREATE A TIME IN THE PAST
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

// TO FIND OUT THE DIFFERENCE IN TIME BETWEEN TWO DATES
const diff = now.getTime() - before.getTime();
// const diff = now - before;

console.log(diff);

// TO CONVERT THE DIFFERENCE IN TIME BETWEEN TWO DATES TO MINUTES, HOURS, AND DAYS
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);

// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp));