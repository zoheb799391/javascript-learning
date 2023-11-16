
// function learn( name , email, desgn) {
//     console.log(`hello ${name} and ${email} `)
//     desgn();
// }
// learn("zoheb", 'xyz@gmail.com');

// function occup() {
// console.log(`im a sde in a kanerika pvt ltd`)
// }
// console.log(learn(occup));


// function x(bx) {
//     console.log("hello");
//     bx();
//     console.log('hello2')
// }
// function y() {
//     console.log("hello3")
// }

// x(y);

// function greet(name, co) {
//     console.log(`hello ${name
//     } !`);
//     co(name);

// }
// function etc(name ) {
//     console.log(`goodbbye ${name} !`)
// }

// greet("zoheb",etc);



// function zoh(eb,ud, din) {
// console.log(`hi ${eb}${ud}`)
//  din(eb, ud);
// }
//  function zob(a, b) {
//     console.log(`hey ${a} ${b} how are You ?`)
//  }
// zoh("zoh","aib",zob);

function hello(a,b,c) {
    console.log(a)
    console.log("Inside hello function")
    b(2,65);
    console.log("Inside hello function - after executing b")
    // b();
    // c();
}

function f1(c,u) {
    console.log("Inside f1 function")
    console.log(c+u)
    console.log("Inside f1 function - after adding sum")
}
// function f2() {
//     console.log("hello2")
// }
// function f3() {
//     console.log("hello3")
// }
console.log('start')
hello("so", f1);
console.log('end')



function ww(a) {
    a(2,5)
}
function sum(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
ww(sum);
