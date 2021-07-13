var readlineSync = require('readline-sync');
var speed = readlineSync.question("enter the speed:--")
if(speed<=60) {
    console.log("Gaadi speed limit ke andar thi")
}else {
    console.log("Gaadi speed limit ke bahar thi")
}