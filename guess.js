var readlineSync = require('readline-sync');
var guess = readlineSync.question("enter the guess:--")
var value = "jabalpur"
if(guess!=value) {
    console.log("Durga your guess is correct")
}else {
    console.log("Durga your guess is wrong")
}