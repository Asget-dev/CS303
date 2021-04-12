function Calculate (num1, num2){
	this.num1 = num1;
	this.num2 = num2;
}
let result = new User(10,20);
Calculate.prototype.getSum = function(){
	return this.num1 + num2;
}

Calculate.prototype.getdiv = function(){
	return this.num1 / num2;
}

Calculate.prototype.getSum = function(){
	return this.num1 - num2;
}



// let calc = new Calculate(2,6);
// new constructorFucntion() is Object.create
// (constructorFucntion.prototype)plus run constractor function
     //the difinition is look like this in code
let calc = Object .create(Calculate.prototype);
calc.constructor(10,29);
console.log(calc.add());

