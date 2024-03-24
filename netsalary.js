//this command is to prompt the user to add their basic salary amount

//let basicSalary = parseFloat(prompt("Please enter your salary: "))

// houseAllowance is a benefit
const houseAllowance = 10000;
let basicSalary = 50000;
let PAYEE = 0;
const NHIFrate = 0.03;
const NSSFrate = 0.06;

let taxableMoneyIncome = basicSalary + houseAllowance


//this command calculates the PAYEE of different income ranges
function taxApplied(taxableMoneyIncome){
    switch (true){

        case taxableMoneyIncome > 0 && taxableMoneyIncome <= 24000:
         PAYEE =taxableMoneyIncome * 0.10;
        break;

        case taxableMoneyIncome >= 24001 && taxableMoneyIncome <=32333:
            PAYEE = taxableMoneyIncome * 0.25;
            break;

            case taxableMoneyIncome >= 32334 && taxableMoneyIncome <=5000000:
                PAYEE = taxableMoneyIncome * 0.30;
                break;

                case taxableMoneyIncome >= 500001 && taxableMoneyIncome <= 800000:
                    PAYEE = taxableMoneyIncome * 0.325;
                    break;

                    default:
                       if  (taxableMoneyIncome > 8000000) {

                        PAYEE =taxableMoneyIncome * 0.35;
                       } else{

                            PAYEE = 0
                        }
                    }
                    return PAYEE;
                }

                        
    
   //this is a command to see if my command gives the required output 
taxApplied(taxableMoneyIncome);
console.log(taxApplied(24000));

//grosspay is the ammount that remains after the PAYEE has been deducted
//the function calculates the grosspay
function grossSalary(taxableMoneyIncome){
  return taxableMoneyIncome - PAYEE
}

//PAYEE = taxApplied(taxableMoneyIncome);

// Calculate NHIF deduction
function getNHIFDeduction(taxableMoneyIncome) {
    return taxableMoneyIncome * NHIFrate;
}

// Calculate NSSF deduction
function getNSSFContribution(taxableMoneyIncome) {
    return taxableMoneyIncome * NSSFrate;
}
//netSalary is the money left after the tax and deductions have been made
//calculate the netsalary
function netSalary(){
    taxableMoneyIncome = basicSalary + houseAllowance;
    PAYEE = taxApplied(taxableMoneyIncome)
    return taxableMoneyIncome -getNHIFDeduction(taxableMoneyIncome)-getNSSFContribution(taxableMoneyIncome)-PAYEE
   
}


//confirming if my code works appropriately
console.log(netSalary(50000))