// function mydisplay(some, a, b) {

//   some();
//   // console.table(some);
// }
  
// function calc(a,b){
//   console.log(a+b);
//   return () => {console.log("ANONYMOUS FUNCTION")}
// }
// // calc(8, 5);
// // mydisplay(calc, undefined, 9);
// mydisplay(calc(3, 6));
// mydisplay(calc(8, 5), calc(1, 2));
// const obj = { a: 1, b: 2};
// mydisplay(obj);

//     function x(a,b,c) {
//         c(a*b);
//         c(a/b);
//         c(a-b);
//         c(a+b);
//     }
//     function y(d) {
//         console.log(d)
//     }
//   x(20,40,y)
//   // callbacks are function which is passed in inside another function as an argumnet

// function evenOrOdd(n,m) {
//    m(n%2);
//   }
  
  
//  function result(z) {
//     if (z === 0) {
//           console.log("Even"); 
//       } else {
//         console.log("Odd"); 
//       }
//  }
//  evenOrOdd(15,result);
//  evenOrOdd(16,result);

 
  
function add(a,b,some) {
  some(a,b);
  console.log("hence proved")
} 

function plus(a,b) {
  let c = a+b
  console.log('plus is',c);
}
add(3,7,plus);

////////////////////////////////////////////////

function minus(some) {
  some(3,5);
}
function remove(a,b) {
  let c = a-b
  console.log('minus is',c);
}
minus(remove);