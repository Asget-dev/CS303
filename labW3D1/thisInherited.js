let user = {
    firstname : 'Default',
    lastname : 'Default',
    getfullName : function(){
        console.log(this.firstname + this.lastname);
    },
}
user.getfullName();
//inherit method from user
let john = Object.create(user);
john.getfullName();

john.firstname = "Asgedom ";
john.lastname = "Nega";
//it looks for his first parent but it inherit from method
john.getfullName();

let william = Object.create(user);
william.firstname = "William ";
william.lastname = 'Happy';
william.getfullName();

// 
