// // //  let lap1 = 20;
// // //  let lap2 = 30;
// // //  let lap3  = 40;

// // //  function add () {
// // //  let totalLlap =lap1+ lap2 + lap3;
// // //  console.log(totalLlap);

// // //  }
// // //  add();

// // //  let a = 0;
// // //   function laps () {
// // //    for( var i = 0;i<=2;i++) {
// // //       a++;
// // //       console.log(a)
// // //    }
// // //   }
// // // laps();

// // // function lappy () {
// // //    a = a + 1;
   
// // // }
// // // lappy()
// // // lappy()
// // // lappy()
// // // console.log(a)
// // // let countt = document.getElementById("count-el")


// // // let count = 0

// // // function unliCliq() {
// // //  count =  count + 1
// // //  console.log(count);
// // //  countt.innerText= count 


// // // }



// // // // function c2f(c_num) {
// // // //     return (c_num * 1.8) + 32;
// // // // }
// // // //  var c = c2f(18);
// // // //  console.log(c); 
// // // //  var f = c2f(100);
// // // //  console.log(f);

// // function btnclq (a,b,btnDiff,showmul,showrem) {

// // if ((a+b).toString()< 30) {
// //     alert("the value is lesser than expected (30)")
// //  } else if ((a+b).toString()==30) {
// //     alert("increase your value > 0")
// //  } else {
// //     alert("sum is:" + (a+b).toString());
    
// //  }
// // btnDiff(a,b);
// //  showmul(a,b);
// //  showrem(a,b);


// // } 

// // function showmul(m,n) {
// // alert("multiply is :" + (m*n).toString());

// // } 

// // function btnDiff(a,b) {
// //     if ((a-b).toString()< 2) {
// //         alert("the value is lesser than expected (30)")
// //      } else if ((a-b).toString()==4) {
// //         alert(" diff : decrease your value > 0")
// //      } else {
// //         alert("diff is:" + (a-b).toString());
        
// //      }
// // }
// //  function showrem(x,y) {
// //    alert("division is : "+ (x/y).toString());
// //  } 


// // // function unliCliq() {
// // //     var a = 0;
// // //     for( var i = 0; i<arguments.length;i++) {
// // //         a+= arguments[i];

// // //     }
// // //     alert('so the sum of infinity numbers are: '+  a.toString())
// // // }




// // // let p1 =  new Promise((resolve, reject) => {
// // //    console.log("promise is pending");
// // //    setTimeout(() => {
// // //       console.log("promise is made");
// // //       resolve("is is true and made ");
// // //    }, 5000)

// // // })
// // // let p2 =  new Promise((resolve, reject) => {
// // //    console.log("promise is pending");
// // //    setTimeout(() => {
// // //       console.log("promise is made");
// // //       reject(new Error("error has occured"));
// // //    }, 5000)

// // // })

// // // p1.then((value)=> {
// // //    console.log(value);
// // // })
// // // p2.catch((Error) => {
   
// // // console.log(" catched and error has occured")
// // // }

// // // );




// // a||b.then(()=> {
// //    console.log("value is true")
// // }).catch(()=> {
// //    console.log(new Error("there's an error"))
// // })


// // promises...//
//  const promise =  new Promise((resolve, reject)=> {
//    console.log('promise is pending')

// reject();

//  })

//  promise.then((data) => {
//    console.log('got entry')
//  }).catch((data)=> {
//    console.log('oh no failed');
//  }).finally((data)=> {
//    console.log('finally something completed');
//  })


//  ///// promise 2

//  const promises =  new Promise((resolve, reject)=> {
//    console.log('promise is pending')

// resolve();

//  })

//  promises.then((data) => {
//    console.log('got entry')
//  }).catch((data)=> {
//    console.log('oh no failed');
//  }).finally((data)=> {
//    console.log('finally something completed');
//  })

//  //// pr 3//

//  const promisess =  new Promise((resolve, reject)=> {
//    console.log('promise is pending')

// resolve();

//  })

//  promisess.then((data) => {
//    console.log('got entry')
//  }).catch((data)=> {
//    console.log('oh no failed');
//  }).finally((data)=> {
//    console.log('finally something completed');
//  })

//  for(let i=0;i<=10;i--) {
//    console.log(i);
//  }
//  const j = 9
//  do {
//    console.log(j);
//  } while (j<10)
// const bool =10;
// do{
//    console.log('its true');
// } while(bool<=10);


// function countRepetitions(str) {
//    const counts = {};
//    for (let i = 0; i < str.length; i++) {
//      const char = str[i];
//      if (!counts.hasOwnProperty(char)) {
//        counts[char] = 1;
//      } else {
//        counts[char]++;
//      }
//    }
//    // console.log(counts) ;
//    return counts
//  }
// console.log(countRepetitions('aabbccddeeee'));


// var str = '';

// str[2]

// counts = {
//    a: 2,
//    b: 'b',
//    c: 'c'
// }

 
function countvalues (val) {
   const numbers = {};
   for( let i =0; i<val.length;i++) {
      const character = val[i];
      if(numbers[character]) {
         numbers[character]++
      } else {
     numbers[character] = 1
      }
      console.log(numbers);
   }
}

countvalues('aabbccdd');

var obj = {
   key: 'value1',
   key2: 'value2'
}

obj.key;
obj[key]