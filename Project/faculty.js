// function load() {
// 	let id = document.getElementById("result");
// 	id.innerHTML = "Lab W2D5";
// }

class Faculty{
	constractor(fname, lname, phone, role, username, password, id, department){
		this.fname = fname;
		this.lname = lname;
		this.phone = phone;
		this.role = role;
		this.username = username;
		this.password = password;
		this.id = id;
		this.department = department;
		console.log(`Hello ${fname }${lname}`)
	}

	
} 



const facult = new Faculty("Asgedom","Haile","888-111-8888","xxxx","user","password",12,"CS");
const facult2 = new Faculty("Zeleke","Haylu","888-111-8888","xxxx","user","password",13,"CS");

console.log(facult);
console.log(facult2);

