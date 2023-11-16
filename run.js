const countval = (val)=> {
    const value = {};
    for( let j = 0; j<val.length;j++) {
        let char = val[j]
        console.log(value)

        // const character = value[char]
        // const values = Array(char)
        // console.log(values);
//         if( !value[char]){
//             value[char] = 1
//         } else {
// value[char]++
//         }
!value[char] ? value[char] = 1 : value[char]++


       }
       console.log(value);
    }
   
   

countval('bbccdd')

// obj.key
// obj[key]