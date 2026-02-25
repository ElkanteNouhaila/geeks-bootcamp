const form = document.getElementById('gif-form');
const input = document.getElementById('gif-input');
const container = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all');
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}&rating=g`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    const gifUrl = data.data.images.fixed_height.url;

    const wrapper = document.createElement('div');
    wrapper.classList.add('gif-wrapper');

    const img = document.createElement('img');
    img.src = gifUrl;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => wrapper.remove());

    wrapper.appendChild(img);
    wrapper.appendChild(deleteBtn);
    container.appendChild(wrapper);

    input.value = '';
  } catch (error) {
    console.error('Error fetching GIF:', error);
  }
});

deleteAllBtn.addEventListener('click', () => {
  container.innerHTML = '';
});