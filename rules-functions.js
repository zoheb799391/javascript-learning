// function 1 
// console.log(add(5))

function add(num) {
    return num + 1
}

// add(5);
// we cannot call or invoke a function when stored in A variable and invoked it before the valriable is declared.
//  function 2 
// console.log(add2(6))
const add2 = function(num) {
    return num + 1
}

// object 

const user =  {
    username:'zoheb',
    age : 22,
   welcomemessage : function() {
    if (this.age <22) {
        console.log(`ohh sorry ${this.username} , underage  & restricted...`)
    } else {
        console.log(`hi ${this.username} , welcome to the party...`)
    }
    
   }
}
user.welcomemessage()
user.username = 'zohaib'
user.welcomemessage()
// console.log(this)

function hello() {
    let user = 'zoheb'
    console.log(user);
    console.log(this.user)

}

// this refers to the current context and can be possible for objects 
// in functions we have to call it by storing into a variable 
// becuase it is running in the nodejs environment
// in chrome it gives the windows context.
hello()

// const hello1 = function() {
//     console.log(this);
// }
// hello1()
 
// arrow function

const hello3 = () => {
    let user = 'hello3'
    console.log(user);
    console.log(this);
}
hello3()
// implicit return in arrow function.
const hello4 =(num1 ,num2) =>  num1 +num2 || (num1 + num2)
console.log(hello4(3,5));