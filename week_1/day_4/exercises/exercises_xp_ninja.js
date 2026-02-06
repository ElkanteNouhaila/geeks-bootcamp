// ===== Exercise 1
const mergeWords = (word) => {
  return (nextWord) => {
    if (nextWord === undefined) {
      return word;
    }
    return mergeWords(word + " " + nextWord);
  };
};

console.log(mergeWords("Hello")()); 

console.log(
  mergeWords("There")("is")("no")("spoon.")()
);


// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...