// two types of dt on basis of how they are stored in memory 
//******************primitive*********************** */
// 7 types ;  string ,number ,boolean ,null ,undefined ,symbol ,bigint
// const id=symbol('123')
// const anotherid=symbol('123')
// console.log(id==anotherid)
//***********nonprimitive or refrence type**************** */
//the reference of these datatypes ae given to the memory
// array,objects,functions
//java script is dynamically tyoe language
const heros=["ben10","batman","ironman"];
let myobj={
    name:"fouzan",
    age:22,
    city:"jabalpur"   
}
const myfunc = function(){
    console.log("hello world");
}
console.log(typeof myfunc)
console.log(typeof heros)
console.log(typeof myobj)
console.log(typeof null) // all non primitive has datatype as object other than function
