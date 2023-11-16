const arr1 = [1,2,34,4,5,5,5]
const arr2 = [,2,2,2,2,2,2,2,2]
const arr3  = [arr1 + arr2]
// console.log(arr3);
//some methods of array....
// pop will delete the last object in the array 
// push will add the object in the array push(436) will add into the array in the lkast index


arr1.unshift(10);
// this will add in the given object in the first index of the array
arr1.shift();
// this will dlete the first object in the array.
// console.log(arr1)
// const mynew1 = arr1.slice(2,6);
// console.log("a " + arr1);
// console.log(mynew1);
// const mynew2 = arr1.splice(2,6);
// console.log("b " + arr1);
// console.log(mynew2);

// the diffrence in the splice and slice is 
 // slice will pick the indexes of the arrays amnd the print the objects between them and removes the last index. and the orginal array remains same
 // splice will pick the indexes btw two indexes and print them till the limit of index, and it removes the mentioned indexes from the arrays.
let ArrList1 = ['qwerty','euqywe','yeguy','1yeuhq']
let ArrList2 = ['nbcjhdgchs','hwqbhgdbqe','jhwquygwqu','wqgduy']

// to join the above two arrays 
// method 1 : - 
let NewAryy = ArrList1.concat(ArrList2)
// console.log(NewAryy);

// method 2 :- 

let SpreadArray = [...ArrList1,...ArrList2]
// console.log(SpreadArray);

 // the difference btw these two is spread operator break each array and join the array.

//  is Array
//  from 
//   of 

// console.log(Array.from("zoheb"));
// console.log(Array.isArray("zohaib"))
// isarray defines the array whether the given data is array or not 
// console.log(Array.of("zoheb","uddin"))
// it converrts the above string into the array.

let obj1= 100;
let obj2 = 200;
let obj3 = 300;
// console.log(Array.of(obj1,obj2,obj3));

/// objects 

const object1 = {'a':'1','b':'2'}
const object2 = {'c':'3','d':'4'}

// to join these two objects 
const object3 = Object.assign({},object1,object2)
// console.log(object3)
/////
////functions with objects\

const obkjet =  {
    user1 : {
        name :'zoheb',
        phnum:'43764879'
    },
    user2: {
        name :'zohaib',
        phnum:'8948934329'
    },
    user3: {
        name :'xoheb',
    phnum:'748709744328'
    },
    user4: {
        name :'xohaib',
    phnum:'9328498324082'
    }
}

function printval(values) {
    console.log(values);
    values.map(value => {
        console.log(value)
    })
    
//  console.log(`hey i'm khaja ${value.name} uddin, my number is ${value.phnum}`)
}
printval(obkjet);
//
// printval(obkjet.user2);
// printval(obkjet.user3);
// printval(obkjet.user4);



