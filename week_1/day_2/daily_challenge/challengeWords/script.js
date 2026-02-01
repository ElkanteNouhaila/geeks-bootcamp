// ====== Daily Challenge 

const input = prompt("Please enter words separated by commas");

const words = input.split(",").map(word => word.trim());

let longestWordLength = 0;
words.forEach(word => {
    if (word.length > longestWordLength) {
        longestWordLength = word.length;
    }
});

const stars = "*".repeat(longestWordLength + 4);
console.log(stars);

words.forEach(word => {
    const spaces = " ".repeat(longestWordLength - word.length);
    console.log(`* ${word}${spaces} *`);
});

console.log(stars);
