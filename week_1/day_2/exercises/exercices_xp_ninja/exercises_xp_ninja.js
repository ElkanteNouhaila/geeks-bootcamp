// ===== Exercise 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNumber);

for (let i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ===== Exercise 2
function capitalize(str) {
    let evenCaps = '';
    let oddCaps = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i];
        } else {
            evenCaps += str[i];
            oddCaps += str[i].toUpperCase();
        }
    }
    return [evenCaps, oddCaps];
}
console.log(capitalize("abcdef"));
// ===== Exercise 3
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("bob"));   
console.log(isPalindrome("kayak")); 
console.log(isPalindrome("hello")); 

// ===== Exercise 4

function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) return 0; 

    let max = -Infinity; 
    for (let i = 0; i < arrayNumber.length; i++) {
        if (typeof arrayNumber[i] === 'number' && arrayNumber[i] > max) {
            max = arrayNumber[i];
        }
    }

    return max;
}

const array1 = [-1,0,3,100, 99, 2, 99];
console.log(biggestNumberInArray(array1)); // 100

const array2 = ['a', 3, 4, 2];
console.log(biggestNumberInArray(array2)); // 4

const array3 = [];
console.log(biggestNumberInArray(array3)); // 0


// ===== Exercise 5
function uniqueElements(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 3, 4, 4, 5];
console.log(uniqueElements(arrayWithDuplicates)); 
