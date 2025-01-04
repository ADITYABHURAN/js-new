const accountId = 123454
let accountEmail = "adityabhuran@google.com"
var accountPassword = "12345"
accountCity = "Chiplun"
let accountState;
// accountId = 3 this is not allowed

accountEmail = "ad@hc.com"
accountPassword = "8122002"
accountCity = "Thane"

console.log(accountId);

/*
Prefer not to use Var 
because of issue in block scope and functional scope
for line 5 if you donot state a variable in Js it is stated as undefined in the O/P
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
