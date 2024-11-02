const name="Fouzan-fc-live "
const repo= 90
console.log(name+repo+"value")
console.log(`hello my name is ${name} i have ${repo} repositories`)
//how to declare a string 
const gamename = new String('Fauzan')
console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('a'))
const newstr=gamename.substring(0,4)
console.log(newstr)
const newwstr=gamename.slice(-8,5)
console.log(newwstr)
const strr="  hello   "
console.log(strr)
console.log(strr.trim())//automatically cut the unnecessary spaces
const url="https://petrifying%20corpse-97qvxrwv4rg7h9vpq.github.dev/"

console.log(url.replace('%20','____')) // helps to replace a particular part of the string
console.log(url.includes('petri'))// checks if a particular element is in string or not
console.log(name.split('-')) // it creates a list on basis on separator