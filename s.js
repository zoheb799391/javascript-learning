// const express = require('express')
// const app = express


// app.get("./",function(req,res) {
//     res.send("hello world")
// });

// app.listen(3000, function() {
//     console.log('api running on the port 3000')
// });


const app = 'zoheb';
const app1 = 'uddin';
console.log(`hi im khaja ${app} ${app1}.`);

const fullname = app + '&' + app1
console.log(fullname);
console.log(fullname.toUpperCase());
console.log(fullname.charAt(10));
console.log(fullname.length);
//length is always calculated from 0 to -------
console.log(fullname.indexOf('d'));
// it give the number at which the charachter is placed
console.log(fullname.trim());
// trim clears the spacce from begining to the last in a string.
console.log(fullname.replace('&',''));
// it replaces the orginal value to the user value 
console.log(fullname.includes('zoheb'));
// checks whether the string has the above values or not ?? boolean (true or false;)


console.log(fullname.split('&'))
// converts the string into the array.

