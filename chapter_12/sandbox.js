// async & await

// WHEN EVER WE CALL A SYNCHRONUS FUNCTION THAT ALWAYS RETURNS A PROMISE REGARDLESS WHAT INSIDE IT
const getTodos = async () => {

  // await KEYWORD => STALL JAVASCRIPT FROM ASIGNING A VALUE TO THE VARIABLE UNTIL THE PROMISE HAS RESOLVED
  let response = await fetch('json/luigi.json');
  let data = await response.json();
  return data;

};

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('resolved:', data));

console.log(3);
console.log(4);

// console.log(getTodos());