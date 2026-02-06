
let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();

const cloneGroceries = () => {

  let user = client;

  client = "Betty";

  console.log(user);   
  console.log(client); 
  
//Strings are primitive types → PASS BY VALUE Changing client does NOT affect user


  let shopping = groceries;

  shopping.totalPrice = "35$";
  console.log(groceries.totalPrice); 

//   Objects are PASS BY REFERENCE shopping and groceries point to the same object


  shopping.other.paid = false;
  console.log(groceries.other.paid); 

// Nested objects are also references Change affects both

};

cloneGroceries();
