const express =  require('express')
const app = express();
const PORT = 5000;

const sendmails = require("./controlar/sendmails.js");

app.get("/",( req,res)=>{
     res.send("I am Server")
})

app.get("/mail", sendmails);

const start  =  async()=>{
try {
     app.listen(PORT,()=>{
     console.log("Server is running on port  http://localhost:"+ PORT);
     })

} catch (error) {
     console.log("Error Found")
}
}

start();