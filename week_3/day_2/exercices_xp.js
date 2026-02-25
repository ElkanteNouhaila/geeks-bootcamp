// ====Exercice 1
const giphyURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(giphyURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching Giphy data:", error);
  });

  // ====Exercice 2
fetch(giphyURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error("Error fetching Giphy data:", error);
  });

  // ====Exercice 3

  async function getStarship() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.result);
    } catch (error) {
      console.error("Error fetching Starship data:", error);
    }
  }
  
  getStarship();

  // ====Exercice 4
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

  // the output will be calling  resolved