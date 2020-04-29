// variables & block scope
let age = 30; // GLOBAL SCOPE

if(true){

  // age = 40;
  let age = 40; // LOCAL SCOPE => ONLY VALID IN THAT CODE BLOCK
  let name = 'shaun';
  console.log('inside 1st code block:', age, name);

  if(true){

    let age = 50;
    console.log('inside 2nd code block:', age, name);

  }

}

console.log('outside code block:', age, name);