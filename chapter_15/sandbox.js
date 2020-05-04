function User(username, email){
  this.username = username;
  this.email = email;
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

// admin
function Admin(username, email){
  // THIS IS HOW WE INHERIT ALL THE PROPERTIES FROM User OBJECT TYPE
  User.call(this, username, email);
}

// THIS IS HOW WE ATTACH INHERTIED METHODS FROM User PROTOTYPE
Admin.prototype = Object.create(User.prototype);

// THIS IS HOW WE ATTACH A SPECIAL METHOD TO THE Admin OBJECT TYPE
Admin.prototype.deleteUser = function(user){
  // delete the user
};

const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

console.log(userThree);