//Dates
let mydate=new Date
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())

console.log(typeof mydate)

let newdate=new Date(2023,0,12)
let newdatee=new Date(2023,0,12,4,6)
console.log(newdate)
console.log(newdate.toDateString())
console.log(newdatee.toLocaleString())
// let cre=new Date("2024-01-21")
// let crea=new Date("01-23-2024")
// console.log(cre.toLocaleString());
// console.log(crea.toLocaleString());




// let mytimestamp=Date.now()
// console.log(mytimestamp)//give the miliseconds passed till now from the given date
// console.log(cre.gettime)
let cre = new Date("2024-01-21");
let crea = new Date("01-23-2024");

console.log(cre.toLocaleString());
console.log(crea.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp); // Prints the milliseconds passed since January 1, 1970 till now

console.log(cre.getTime()); // Corrected line to print the milliseconds for the `cre` date 
// it is generally asked to convert the milisecond in seconds
console.log(Math.floor(Date.now()/1000))


let newwdate=new Date();
console.log(newwdate);
console.log(newwdate.getHours())//after newwdate. we get a number of functions 