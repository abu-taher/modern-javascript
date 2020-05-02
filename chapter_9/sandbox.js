// reduce() Method => executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//   if(curr > 50){
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);

const scores = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
];

const marioTotal = scores.reduce((acc, curr) => {
  if(curr.player === 'mario'){
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioTotal);