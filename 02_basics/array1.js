const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel.push(dc)
console.log(marvel)
//console.log(marvel[3][2])

const allheros=marvel.concat(dc)
console.log(allheros)

const allher=[...marvel,...dc]//best way to concatenate arrays
console.log(allher)

const bigarr=[1,2,3,[4,5],[6,7,8],[2,3,4]]
const usable_bigarr=bigarr.flat(Infinity)
console.log(usable_bigarr);


//how to convert string in array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//this will convert it in array all charecters
console.log(Array.from({name: "Hitesh"}))//intresting askd question
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))



