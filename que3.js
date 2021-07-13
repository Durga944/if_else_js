var readlineSync = require("readline-sync")
var num = readlineSync.question("enter any num--")
if(num==10){  
console.log("num is equal to 10");  
}  
else if(num==15){  
console.log("num is equal to 15");  
}  
else if(num==20){  
console.log("num is equal to 20");  
}  
else{  
console.log("num is not equal to 10, 15 or 20");  
}  