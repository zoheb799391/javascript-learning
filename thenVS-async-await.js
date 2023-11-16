///// this is fetching data using then() & catch() promises with fullfillemnt and rejection state...
const url = ('https://jsonplaceholder.typicode.com/todos/1');
fetch(url).then((res)=> {
     return res.json();
}).then((data)=> {
    console.log(data)
}).catch((err)=> {
    console.log('error has happened',err)
})

////////fetching data from the api using async await with try and catch methods

async function fetchdata() {
    try{
        const url = ('https://jsonplaceholder.typicode.com/todos/2')
        const res = await fetch(url);
      const data = await res.json();
      
      console.log(data)
    } catch(err){
console.log('error has occured', err)
    }
  
}
fetchdata();