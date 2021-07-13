const readlineSync = require("readline-sync")
const length = readlineSync.question("enter any length--")
const breadth = readlineSync.question("enter any breadth--")
if(length==breadth) {
    console.log("It is Square")
}else {
    console.log("It is Rectangle")
}