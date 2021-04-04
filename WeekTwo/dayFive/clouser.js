function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 2) {
    let j=i;;
   function shooter() {
      console.log(i);
    };
    shooters.push(shooter);
    i++;
  
  }
  return shooters;
}
let army = makeArmy();
console.log(army[0]());

