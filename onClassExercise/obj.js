const person = {
    name: 'Edward',
     city:'New York',
     age: 37,
     isStudent:true,
     skills:['Javascript', 'HTML','CSS'],
   }
   person.nickname = 'mark';
   person.age+1;
   const message = `Hi, I'm ${person.name}. I live in ${person.city}.Most knowme as ${person.name='duck'} also my nick name is ${person.nickname}. My age is ${person.age + 1}. 
   I have ${person.skills.length} skills: ${person.skills.join(', ')}`;
   console.log(message);

   for(let key in person){
    //    console.log(key);// return name,city,age,isStudent,skill
    //    console.log(person[key])//javascript,html,css
       //console.log(person['name'])//javascript,html,css
       console.log(`${key}: ${person[key]}`)
   }


   const person2 = {
    name: 'Reggie',
    role: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
  };

  const personVals = Object.values(person2);
  console.log(Object.keys(person2).length);
  console.log(personVals);

  //return array
  const person2Props = Object.keys(person2);
  console.log(person2Props);


//   The handy spread operator
// In a previous course on JavaScript arrays, you learned how to copy and combine arrays with the spread operator (...).

// You can use the spread operator to copy key/value pairs from one object to another. Evaluate the following objects:
const name = {
    firstName: 'Reggie',
    lastName: 'Williams',
  };
  
  const role = {
    title: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
  };
  
  // merge `name` and `role` into a `person` object
  const person3 = {  
    ...name,
    ...role
  };
  console.log(person3);


  