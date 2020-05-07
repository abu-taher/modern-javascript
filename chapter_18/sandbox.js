// symbols => THE MAIN FEATURE OF A SYMBOL IS THAT IS COMPLETELY UNIQUE, NO TWO SYMBOLS CAN EVER BE EQUAL TO EACH OTHER
// SYMBOL IS A PRIMITIVE TYPE

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

// USE A SYMBOL AS AN OBJECT KEY MEANS THAT ALL THE KEYS IN AN OBJECT ARE DEFINITELY UNIQUE
ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);
console.log(ninja[symbolOne], ninja[symbolTwo]);