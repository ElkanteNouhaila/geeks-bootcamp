// ==== Exercise1
const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');

// Part I
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II
setTimeout(() => {
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part III
const intervalId = setInterval(() => {
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);

    if (container.children.length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

clearBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});


// ==== Exercise 2
const animateBox = document.getElementById('animate');
const containerBox = document.getElementById('container');
let moving = false;

function myMove() {
    if (moving) return; 
    moving = true;

    let pos = 0;
    const containerWidth = containerBox.offsetWidth;
    const boxWidth = animateBox.offsetWidth;

    const id = setInterval(() => {
        if (pos >= containerWidth - boxWidth) {
            clearInterval(id);
            moving = false;
        } else {
            pos++;
            animateBox.style.left = pos + 'px';
        }
    }, 1);
}

document.querySelector('button').addEventListener('click', myMove);