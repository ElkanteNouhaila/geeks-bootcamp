const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
// ==== Exercise 1
//1
let sumHumanYears = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    sumHumanYears += data[i].age * 7; 
  }
}

console.log(sumHumanYears); 
//2
const sumHumanYearsReduce = data.reduce((sum, animal) => {
  if (animal.type === 'dog') {
    return sum + animal.age * 7;
  }
  return sum;
}, 0);

console.log(sumHumanYearsReduce); 

// ==== Exercise 2
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const cleanEmail = userEmail3.trim();
console.log(cleanEmail); 

// ==== Exercise 3
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const newUsers = {}; 

for (const user of users) {
  const fullName = `${user.firstName} ${user.lastName}`;
  newUsers[fullName] = user.role;
}

console.log(newUsers);

// ==== Exercise 4
//1
const letters = ['x', 'y', 'z', 'z'];
const count = {}; 

for (const letter of letters) {
  if (count[letter]) {
    count[letter] += 1;
  } else {
    count[letter] = 1;
  }
}

console.log(count); 

//2
const countReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(countReduce); 
