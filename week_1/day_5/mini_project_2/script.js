document.addEventListener("keydown", function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
});

const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
  drum.addEventListener("click", function() {
    const key = this.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
  });
});
