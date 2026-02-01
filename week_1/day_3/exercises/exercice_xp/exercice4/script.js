const form = document.getElementById("MyForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

    const r = parseFloat(radiusInput.value);

    if (isNaN(r) || r <= 0) {
        alert("Please enter a valid positive number for radius!");
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    volumeInput.value = volume.toFixed(2);
});
