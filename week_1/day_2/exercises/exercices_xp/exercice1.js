// ==== Exercice1 
function displayNumberDivisible(divisor){
    let sum = 0;
    let outcome = ' ';
    for(let number = 0; number <= 500; number++){
        if(number % divisor ===0){
            sum += number;
            outcome = outcome+ number + " ";
        }
    }
    console.log("outcome: ",outcome);
    console.log("The total sum is: " + sum);
}
displayNumberDivisible(10);