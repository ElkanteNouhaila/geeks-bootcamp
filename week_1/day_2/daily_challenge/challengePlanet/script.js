// ====== Daily Challenge 1
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 4 },
    { name: "Saturn", color: "goldenrod", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 2 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {

    const planetDiv = document.createElement("div");
    
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    
    section.appendChild(planetDiv);

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        
        moonDiv.classList.add("moon");
        moonDiv.style.top = Math.random() * 80 + "px";
        moonDiv.style.left = Math.random() * 80 + "px";

        planetDiv.appendChild(moonDiv);
    }

});