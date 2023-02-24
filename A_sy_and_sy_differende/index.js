const fs = require('fs');

// fs.writeFileSync("index1.text","What is you so that Ashvani");

// const red = fs.readFileSync("index1.text",'utf8');
// console.log(red)
// console.log("Good Morning")

fs.readFile("index1.text","utf8",(err,data)=>{
     if(err){
          console.log("error")
     }
    console.log(data);
})
console.log("Good Morning")