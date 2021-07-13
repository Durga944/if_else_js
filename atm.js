var readlineSync = require('readline-sync');
var user = readlineSync.question("Choose your Langugae \n 1.English \n 2.Hindi \n...=")

if(user==1) {
    console.log("English");
}
else{
    console.log("Hindi")
}
var readlineSync = require('readline-sync');
var pin_code = parseInt(readlineSync.question("Enter your pin\n...="))
if(pin_code==1234) {
    console.log("Choose what u want \n 1.Balance Inquiry \n 2.Withdrawl \n 3.Pay in \n 4.return card/ Exit")
    var user_choice = readlineSync.question("Enter what u want--")
    var balance = 500000;
    if(user_choice == "Balance Inquiry") {
        console.log(balance)
    }
    else if(user_choice == "Withdrawl") {
        var user_with = readlineSync.questionInt("How many money u want u withdrawl--")
        console.log(balance-user_with)
    }
    else if(user_choice == "Pay in"){
        var payin = readlineSync.questionInt("How many money u want u payin--")
        console.log(balance+payin)
    }
    else if(user_choice == "return card/ Exit"){
        console.log("Exit")
    }
}
else {
    console.log("sorry your pincode is wrong plzz enter your correct pin")
}


















