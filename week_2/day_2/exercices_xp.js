// === Exercise 1 
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1 
for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${colors[i]}`);
}
// 2
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {    console.log("No...");
}

// === Exercise 2
const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let suffix = ordinal[0];
    if (i === 0) {
        suffix = ordinal[1];
    } else if (i === 1) {
        suffix = ordinal[2];
    } else if (i === 2) {
        suffix = ordinal[3];
    }
    console.log(`${i + 1}${suffix} choice is ${color[i]}`);
}

// === Exercise 3
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//------2------
const country = "USA";
console.log([...country]);

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);

//1 the output will be: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
//2 the output will be: ['U', 'S', 'A']
//Bonus the output will be: [undefined, undefined]

// === Exercise 4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//1
const welcomeMessages = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeMessages);
//2
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

//3
const fullStackLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
console.log(fullStackLastNames);

// === Exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicString = epic.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
console.log(epicString);

// === Exercise 6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter(student => student.isPassed);
passedStudents.forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`));
