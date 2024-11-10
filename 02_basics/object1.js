//singleton objects, this is made by constructor
//object.create in this way


//object literals
const mysym=Symbol("key1")

const Jsuser={
    name: "Fauzan",
    [mysym]: "mykey1", //this is syntax to put in []bracket without this the typeof mysym will be string and after is symbol
    age: 22,
    location: "jabalpur",
    email: "fauzansyed360@gmai.com",
    isloggedin: "YES",
    lastloggedin: "Sunday"

}
//now ways to access information from object
//1st way
console.log(Jsuser.email)
//2nd way
console.log(Jsuser["email"]) //this is best way 
//if key is in string we will not be able to fetch it with . method
//how to ceate a symbol and use it as a key ? see above obj
console.log(Jsuser[mysym])

//we can also overwrite the values
Jsuser.email="22bsm037@iiitdmj.ac.in"
//but if we want to lock it so that noone able to change it 

//Object.freeze(Jsuser) //to run the below function we have to stop the freezing
Jsuser.email="noemail" //it will not change
console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("Hello Jsuser")
}
//how to target a particular key 
Jsuser.greeting2=function(){
    console.log(`hello Jsuser,${this.name} `)//to add name from obj
}
console.log(Jsuser.greeting)//this will tell its a function
console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())