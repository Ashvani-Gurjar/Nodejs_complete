const fs = require('fs');
const mybio = {
     name: "Ashvani",
     age: "20",
     gender: "male",
     address: "New Delhi",
     phone: "987654321"
};

const jsonData =  JSON.stringify(mybio);

fs.writeFile("simple/index.txt", jsonData ,()=>{
     console.log("File Saved");
})

const red = fs.readFile("simple/index.txt","utf8",(err,data)=>{
     if(err){
          console.log("Error found");
     }
     const orgData = JSON.parse(jsonData);
     console.log(data);
     console.log(orgData);
})


