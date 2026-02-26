const form = document.getElementById("sun-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const lat1 = document.getElementById("lat1").value;
  const lng1 = document.getElementById("lng1").value;
  const lat2 = document.getElementById("lat2").value;
  const lng2 = document.getElementById("lng2").value;

  const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
  const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

  const request1 = fetch(url1).then(res => res.json());
  const request2 = fetch(url2).then(res => res.json());

  Promise.all([request1, request2])
    .then(data => {
      const sunrise1 = data[0].results.sunrise;
      const sunrise2 = data[1].results.sunrise;

      result.innerHTML = `
        City 1 Sunrise: ${sunrise1} <br>
        City 2 Sunrise: ${sunrise2}
      `;
    })
    .catch(error => {
      console.error("Error:", error);
    });
});