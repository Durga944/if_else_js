const readlineSync = require('readline-sync');
const year = readlineSync.question("enter the year:--")
// console.log(year)

if(year%4==0) {
    if(year%100==0) {
        if(year%400==0){
            console.log(year,"year is century leap year")
        }else{
            console.log(year,"not century leap year")
        }
    }else{
        console.log(year,"leap year")
    }
}else{
    console.log(year,"not leap year")
}
