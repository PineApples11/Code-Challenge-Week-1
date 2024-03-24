// prompts the driver
const speedValue= prompt ("please enter your speed:")

let response = "";
let demerits = 0


//this command ensures the conditions set are used to give the correct output
function speedDetector(speedValue){
    switch(true){

    case speedValue < 0:
        response = "null";
    break; 
    case speedValue >=0 && speedValue <= 70:
        response = "Ok";
        break;
        default :
        const perPoint = 5;
        const different = speedValue - 70;
        demerits = ~~(different / perPoint);
        response = "Points: " + demerits;

        response = (demerits > 12) ? "License suspended"
+ demerits : response ;
 }
 return response    
}

//checks if the code works appropriately
console.log(speedDetector(88))
 

