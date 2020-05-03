// fetch API

// THE WAY THE FETCH API WORKS IS THE PROMISE IS ONLY EVER REJECTED WHEN WE GET SOME KIND OF NETWORK ERROR
fetch('json/luigi.json').then(response => {
    //console.log(response);
    // THE json() METHOD GETS THE RESPONSE DATA => THIS RETURN A PROMISE
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });