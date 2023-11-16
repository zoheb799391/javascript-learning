//  const doc = document.getElementById("hello")
//  doc.style.color = 'blue'

// const docc = document.getElementsByClassName("helloo")
// docc[0].style.color = "red";

// const doccc = document.querySelector('#hello')
// doccc.style.color = 'green'
//  const usee = document.getElementById('hello').innerHTML = 'good eveneing'
// console.log(usee)

 document.getElementById('button').addEventListener('click', function(e){
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.target);
    console.log(e.srcElement);
    console.log(e.currentTarget);


 })