function User(username, email){
  this.username = username;
  this.email = email;
}

// THIS IS HOW TO ATTACH METHODS TO OBJECT, THIS IS HAPPENING UNDER THE HOOD WHEN WE USE CLASS SYNTAX
User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');

console.log(userOne);

userOne.login().logout();