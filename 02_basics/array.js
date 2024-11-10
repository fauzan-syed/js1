const arr=[1,2,3,4]
console.log(arr)
const heros=["DC","Marvel"]
const myarr=new Array(1,2,3,4,5,6,7,8)
console.log(myarr[2])

//array methods
myarr.push(6)
myarr.push(7)
myarr.pop()

myarr.unshift(9) //it adds at index 0 and every value skip by one step

console.log(myarr)
myarr.shift()//it deletes the first element 
console.log(myarr)

console.log(myarr.includes(9))
console.log(myarr.indexOf(3))

const newarr=myarr.join()// it converts the array in string
console.log(myarr)
console.log(newarr)

//slice,spice
console.log("A ",myarr)
const myn1=myarr.slice(1,3)//this will give index 1 to 2 3 is not included 
console.log(myn1)
console.log("B ",myarr)
const myn2=myarr.splice(1,3)
console.log(myn2)
console.log("C ",myarr)//after using splice the range metioned will be taken away



