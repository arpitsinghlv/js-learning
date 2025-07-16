const accountId = 144553 //can't be changed
let accountEmail = "arpit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "as@as.com"
accountPassword = "212121"
accountCity = "Bengluru"

/* prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountId, accountCity, accountState])