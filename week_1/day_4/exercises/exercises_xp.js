// ===== Exercise 1
// #1
function funcOne() {
    const a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// error because we are trying to reassign a constant variable

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//error because funcTwo is trying to reassign a constant variable


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// window.a creates a global variable accessible everywhere.

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// no change, the variable a is only used inside the function and is not reassigned, so it can be declared with const without any issues.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// // same result, const is also block-scoped.


// ===== Exercise 2
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// ===== Exercise 3
const isString = (value) => typeof value === "string";

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

// ===== Exercise 4
const sum = (a, b) => a + b;

console.log(sum(5, 10)); 
console.log(sum(2, 3));  


// ===== Exercise 5
function kgToGrams(kg) {
    return kg * 1000;
}

console.log(kgToGrams(5)); 

const kgToGramsExpression = function(kg) {
    return kg * 1000;
}

console.log(kgToGrams(3)); 

// 3. Difference between declaration and expression: Function declarations are hoisted and can be called before they are defined, function expressions are not hoisted.

const kgToGramsArrow = kg => kg * 1000;

console.log(kgToGramsArrow(2));


// ===== Exercise 6
(function(numChildren, partnerName, geoLocation, jobTitle) {
    const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
    
    const p = document.createElement('p');
    p.textContent = message;
    document.body.appendChild(p);
    
})(3, "Sarah", "Paris", "Web Developer"); 


// ===== Exercise 7
// html file is in the same folder as this js file named exercice7.html

(function(userName) {
    const userDiv = document.createElement('div');

    const img = document.createElement('img');
    img.src = 'avatar.png'; 
    img.alt = 'Profile Picture';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = userName;

    userDiv.appendChild(img);
    userDiv.appendChild(nameSpan);

    const navbar = document.getElementById('navbar');
    navbar.appendChild(userDiv);

})("John"); 

// ===== Exercise 8
function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    document.getElementById("result").innerText =
      `The client wants a ${size} drink juice, containing ${ing1}, ${ing2}, ${ing3}.`;
  }

  addIngredients("banana", "strawberry", "mango");
}

makeJuice("medium");


// II

function makeJuice(size) {
  let ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    document.getElementById("result").innerText =
      `The client wants a ${size} drink juice, containing ${ingredients.join(", ")}.`;
  }

  addIngredients("banana", "strawberry", "mango");
  addIngredients("apple", "orange", "pineapple");

  displayJuice();
}

makeJuice("large");
