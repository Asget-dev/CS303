// const { hostname } = require("node:os");

class User {
	constructor(name, author, year) {
	  this.name = name;
	  this.author = author;
	  this.year = year;
	}
	static manager(){
		console.log("hi its me the manager")
	}
	login(user,pass){
		if(user == "osama" && pass == "123"){
			console.log("login success---")
		}else{
			console.log("login failed")
		}
	}
	logout(){
		console.log("logout")
	}
	printall(){
		return [this.name,this.author,this.year]
	}
  }

  const asgedom = new User("book one", "John Doe", "2013");
  const abera = new User("book one ", "John Doe", "2013");
  asgedom.login("osama",123);
  abera.login("aa",123);
  console.log(asgedom.printall());

class Manager extends User{
	constructor(name){
		super()
		this.name = name;
	}

	login(user,pass){
		if(user == "manager" && pass == "123"){
			console.log("login success---")
		}else{
			console.log("login failed")
		}
	}
}
let jone = new Manager("jone",)
jone.login("manager","123");
jone.logout();
console.log(jone.printall());