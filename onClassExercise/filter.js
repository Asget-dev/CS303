const numbers = [3, 0, 0, 0, 5, 6, 0, 0, 7, 0];
function removeZeros(numbers) {
	const unique = numbers.filter(function(number, index, array){
		return index === array.indexOf(number);
	});
return unique;
}


console.log(removeZeros(numbers));