import people from './data.js';

function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  return totalAge / personArray.length;
}

const averageAge = calculateAverageAge(people);

console.log("Average age:", averageAge);