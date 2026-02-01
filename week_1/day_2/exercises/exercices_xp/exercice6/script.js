// =====Exercise 6: Change the navbar
const navbar = document.getElementById("navBar");
navbar.setAttribute("id", "socialNetworkNavigation");

const newList = document.createElement("li");

const textNode = document.createTextNode("Logout");

newList.appendChild(textNode);

const ul = navbar.firstElementChild
ul.appendChild(newList);

const firstItem = ul.firstElementChild;
const lastItem = ul.lastElementChild;

console.log("First Item:", firstItem.innerText);
console.log("Last Item:", lastItem.innerText);