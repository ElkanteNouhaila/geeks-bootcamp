// ===== Exercise 2
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];

function myBill(){
    let totalprice = 0;
    for (item of shoppingList){
        if (stock[item]>0){
            totalprice += prices[item];
            stock[item]--;
        }
    } return totalprice; 
}
console.log("Total price is: " + myBill());