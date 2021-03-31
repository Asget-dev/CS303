//constractor function
//you must to have new key word
// Map is Kdy value pair like object the different is the key
// dosent care about the type of the key
//Map accept only one argument
let personMap = new Map();
personMap.set(1, { id: 1, name: "Jhon" });
personMap.set(2, { id: 1, name: "Mary" });
personMap.set(2, { id: 1, name: "Replace Mary" });

personMap.set("1", { id: 1, name: "Rary" });
personMap.set(true, { id: 1, name: "Rary" });

let result = personMap.get(1);
console.log(personMap);

//has chake the key
let result2 = personMap.has(3);
console.log(result2);

console.log(personMap.size);

//also we can use object as key
let personMap2 = new Map();
let coord1 = { x: 1, y: 1 };
let coord2 = { x: 2, y: 4 };
let coord3 = { index: 2, name: "John" };

personMap2.set(coord1, "1----");
personMap2.set(coord2, "2----");
personMap2.set(coord3, "3----");

console.log(personMap2);

console.log("***********************");
// Iteration over Map
// • For looping over a map, there are 3 methods:
// • map.keys() – returns an iterable for keys,
// • map.values() – returns an iterable for values,
// • map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
