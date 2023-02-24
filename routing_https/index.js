const https = require("http");

const server = https.createServer((req, res) => {
     // console.log(req.url);
     if(req.url == "/"){
          res.end("Hello I am Ashvani Singh Gurjar");
          
     }
     else if(req.url =="/contact"){
          res.end("This is not a clab go thatsied")
     }
     else if(req.url =="/link"){
          res.end("This is not a correct link bro")
     }
     else{
          res.writeHead(404,{"Content-type":"text/html"})
          res.end("<h1>Error: Page not found</h1>");
     }
})

server.listen(3000,() => {
     console.log(`Server is running on port http://localhost:3000 `);
})