// let name =  ['zoheb','zohaib','xoheb','xohaib']
// for(let i = 0;i<name.length;i++) {
//     const names = name[i]
//     if(i ==1){
//         console.log(`hey ${names}, how are you?`)

//     } else {
//         console.log(`hi ${names
//         }`);
//     }

// }

// for loop

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('for loop starts here');
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log('while starts here');
let i = 0;

while (i < array.length) {
    console.log(array[i]);
    i++;
}

// let n = 5;
// let string = "";
//  for(let i=0;i<n;i++) {
//     for (let j=0;j<n;j++) {
//         string += "*"; 
//     }

//     string += '\n'
//  }
// // console.log(string);


// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1) {
//             string += "*";
//         } else if (j === 0 || j === n - 1) {
//             string += "*";
//         } else {
//             string += " ";
//         }
//     }
//     string += "\n";
// }
// console.log(string);


// triangle 
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        string += " ";

    }
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";

    }
    string += "\n";
}
console.log(string);


// reverse a traingle

let m = 5;
let Striing = "";
for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
        Striing += " ";
    }
    for (let k = 0; k < 2*(m-i)-1; k++) {
        Striing += "*";
    }
    Striing += "\n";
}
console.log(Striing);




let r = 4;
let app = "";
for(let i = 1;i<r;i++) {
    for(let j=1;j<r-i;j++) {
        app += " ";

    }
    for(let k =0;k<2*r-1;k++) {
        app +="*";
    }
    app += "\n"
}
console.log(app);


for(let i = 1;i<=r;i++) {
    for(let j=1;j<=r-i;j++) {
        app += " ";

    }
    for(let k =0;k<2*i-1;k++) {
        app +="*";
    }
    app += "\n"
}
console.log(app);


for( let i = 0;i<r;i++ ){
    for(let j = 0;j<i;j++) {
        app+= " "
    }
    for( let k = 0;k< 2*(r-i)-1;k++) {
        app += "*"
    }
    app += "\n"
}
console.log(app);


for(let i = 1;i<=r;i++) {
    for(let j =1;j<=r-i; j++) {
        app += " "
    }
    for(let k = 0;k<2*i-1;k++) {
        app += "*"
    }
    app += "\n"
}

console.log(app);

for (let i = 0;i<r;i++) {
    for(let j = 0;j<i;j++) {
        app += " "
    }
     for(let k =0;k<2*(r-i)-1; k++) {
        app +="*"
     }
     app += "\n"
     
}
console.log(app);