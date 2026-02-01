// ===== Exercise 5

const containerDiv = document.getElementById("container");
console.log(containerDiv);

const allList = document.querySelectorAll("ul.list li");
allList.forEach(li => {
    if (li.textContent === "Pete") {
        li.textContent = "Richard";
    }
});


const secondUl = document.querySelectorAll("ul.list")[1];
secondUl.removeChild(secondUl.children[1]); 

const allUl = document.querySelectorAll("ul.list");
allUl.forEach(ul => {
    ul.children[0].textContent = "Nouhaila"; 
});

allUl.forEach(ul => {
    ul.classList.add("student_list");
});

allUl[0].classList.add("university", "attendance");

containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

allList.forEach(li => {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
});

allList.forEach(li => {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid black";
    }
});

document.body.style.fontSize = "18px";

if (containerDiv.style.backgroundColor === "lightblue") {
    const users = Array.from(allList).map(li => li.textContent).filter(name => name !== "Dan");
    alert(`Hello ${users.join(" and ")}`);
}
