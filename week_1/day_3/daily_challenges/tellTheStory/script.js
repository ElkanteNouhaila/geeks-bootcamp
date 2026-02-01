const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

const stories = [
    (noun, adjective, person, verb, place) => `${person} took a ${adjective} ${noun} and decided to ${verb} it at the ${place}.`,
    (noun, adjective, person, verb, place) => `Once upon a time, ${person} found a ${adjective} ${noun} and ${verb} it in the ${place}.`,
    (noun, adjective, person, verb, place) => `In the ${place}, ${person} saw a ${adjective} ${noun} and couldn't resist to ${verb} it.`,
    (noun, adjective, person, verb, place) => `${person} went to the ${place} with a ${adjective} ${noun} to ${verb} all day long.`
];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill all fields!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[randomIndex](noun, adjective, person, verb, place);
});

const shuffleButton = document.createElement("button");
shuffleButton.textContent = "Shuffle Story";
form.appendChild(shuffleButton);

shuffleButton.addEventListener("click", function(event) {
    event.preventDefault();
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill all fields!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[randomIndex](noun, adjective, person, verb, place);
});

