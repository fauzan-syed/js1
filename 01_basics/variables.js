const accountID=14453
let accountemail="fizz@gmail.com "
var accountpass="12345"
accountcity="Jaipur"
let accountstate;


//accountID=4 , we cannot change the constant
accountemail="hc@hc.com"
accountpass="qwert"
accountcity="Delhi"
// prefer not to use var because of issue in blockscope and functional scope

console.log(accountID);
console.table([accountID,accountemail,accountpass,accountcity,accountstate])
