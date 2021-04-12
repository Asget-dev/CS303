let user = {
    firstname : 'Default',
    lastname : 'Default',
    getfullName : function(){
        console.log(this.firstname + this.lastname);
    },
    setFirstName : function(firstName){
        this.firstName = firstName;
    }
}

user.setFirstName('ChangedFirstName');
user.getFullName();

let john = Object.create(user);
john.setFirstName('john');
john.getfullName();
user.getfullName();


