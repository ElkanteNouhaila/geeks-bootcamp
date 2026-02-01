const h1 = document.querySelector("article h1");
console.log(h1);

const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");
paragraphs[paragraphs.length - 1].remove();

const h2 = article.querySelector("h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

const h3 = article.querySelector("h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

const button = document.getElementById("boldButton");
button.addEventListener("click", () => {
    const allParagraphs = article.querySelectorAll("p");
    allParagraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

h1.addEventListener("mouseenter", () => {
    const randomSize = Math.floor(Math.random() * 101); 
    h1.style.fontSize = randomSize + "px";
});

const secondParagraph = article.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseenter", () => {
    secondParagraph.classList.add("fade");
});
