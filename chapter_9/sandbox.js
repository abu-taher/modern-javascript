// find() => RETURNS THE VALUE OF THE FIRST ELEMENT INSIDE AN ARRAY THAT PASSES A CERTAIN TEST IN A CALLBACK FUNCTION
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);
console.log(firstHighScore);
