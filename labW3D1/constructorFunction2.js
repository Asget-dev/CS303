function User(fname, lname){
    this.fname = fname;
    this.lname = lname;
}
//this is refer to user1 and user2
let user1 = new User("jack","smith");
let user2 = new User("William","happy");

//since user1 and user2 inherited from User constractor function
// I create getFullname method inorder to user one and user two to inherite from User
//by using User.prototype.getFullname they link we add getFullname in to User function
User.prototype.getFullname = function(){
    console.log(this.fname +' '+ this.lname);
}
User.prototype.birthDate = function(){
    console.log(new Date('2020-10-01'));
}
user1.birthDate();
// console.log(user1.birthDate());
// console.log(user2.birthDate())
user1.getFullname();
user2.getFullname();


