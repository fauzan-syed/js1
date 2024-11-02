const score=200
console.log(score)
const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length) // conveert the number to string and then fetch the length 
console.log(typeof balance)
console.log(balance.toFixed(2))//represents the number in decimal form

const othnum=100.889
console.log(othnum.toPrecision(4))//it takes the number to precision to tne number given

const hun=10000000000;
console.log(hun.toLocaleString('en-IN')) // this is used to convert the number into indian style number system
console.log(Number.MAX_VALUE.toFixed(19))


//****************MATHS******************** */
console.log(Math)
console.log(Math.abs(-4))//it act as a modulus finction


console.log(Math.round(4.6))// it give the round off value

console.log(Math.ceil(4.2))//the next gretest number to the integer
console.log(Math.floor(4.2))//the gif function basically

console.log(Math.max(2,3,4,5));// we can get min and max of the following numbers 

console.log(Math.random()); // it always gives value between 0&1
console.log((Math.random()*10) +1)

const max=20
const min=10
console.log((Math.random())*(max-min+1)+min) //this is done to get the number in particular range 


