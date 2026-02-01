// ===== Exercise 4
function hotelCost(){
    let nights;
    do {
        nights = parseInt(prompt("How many nights would you like to stay at the hotel?"));
    } while (isNaN(nights) || nights <= 0);
    return nights * 140;
}
function planeRideCost(){
    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (!isNaN(destination) || destination.trim() === "");

    destination = destination.toLowerCase();    
    switch(destination){
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost(){
    let days;
    do {
        days = parseInt(prompt("How many days would you like to rent the car?"));
    } while (isNaN(days) || days <= 0);
    let cost = days * 40;
    if (days > 10){
        cost *= 0.95;
    }
    return cost;
}
function totalVacationCost(){
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}.`);
    console.log(`Total vacation cost: $${total}.`);
    return total;
}
totalVacationCost();