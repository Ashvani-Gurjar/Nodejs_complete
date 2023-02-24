const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) =>{
     const orig = fs.readFileSync(`${__dirname}/api.json`,"utf8");
     if(req.url ==  "/"){
          res.end("What the book");
     }
     if(req.url == "/userApi"){
          const data1 = JSON.parse(orig);
          // res.writeHead(200,{"Content-type" : "application/json"})
          res.end(orig)
          console.log(orig);
     }
})

server.listen( 3000,()=>{
     console.log("server run on http://localhost:3000");
}) 
