const form = document.querySelector("form");
console.log(form);

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log(fnameInput, lnameInput);

const fnameByName = document.querySelector("input[name='firstname']");
const lnameByName = document.querySelector("input[name='lastname']");
console.log(fnameByName, lnameByName);

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please fill both fields!");
        return;
    }

    const ul = document.querySelector(".usersAnswer");

    const liFirst = document.createElement("li");
    liFirst.textContent = firstName;

    const liLast = document.createElement("li");
    liLast.textContent = lastName;

    ul.appendChild(liFirst);
    ul.appendChild(liLast);

    fnameInput.value = "";
    lnameInput.value = "";
});
