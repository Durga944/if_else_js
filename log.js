const readlineSync = require("readline-sync")
const year = readlineSync.question("enter any year--")
const salary = readlineSync.question("enter any salary--")
if(year>5) {
    console.log("Bouns is",.05*salary)
}else{
    console.log("No Bouns")
}