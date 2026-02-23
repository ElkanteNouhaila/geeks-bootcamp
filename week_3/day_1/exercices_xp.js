// ====Exercice 1 
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }
  
  // test 1: resolve
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

  // test 2: reject
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
// ====Exercice 2
const delayedSuccess = new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  delayedSuccess.then(result => console.log(result));


  // ====Exercice 3
  // promise that resolves with value 3
const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(value => console.log(value));

// promise that rejects with "Boo!"
const rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(error => console.log(error));