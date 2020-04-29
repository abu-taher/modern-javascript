// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    // access the blogs here
    // console.log(this);
    console.log('this user has written these blogs:');
    // IN ORDER TO USE (this) INSIDE A METHOD TO REFER TO THE ACTUALL OBJECT THAT THE METHOD IS ON, WE NEED TO USE A REGULAR FUNCTION NOT AN ARROW FUNCTION
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }
};

// console.log(this);
user.logBlogs();