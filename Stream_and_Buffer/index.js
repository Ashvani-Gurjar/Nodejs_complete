const fs = require("fs");
const http =  require("http");

const server = http.createServer();

// this is a first way
     // server.on("request",(req,res)=>{
     //      fs.readFile("dataset.text",(err,data)=>{
     //      if(err) console.log("Error found ");
     //      res.end(data)
     //    })
     // })

// this is the second way

//   server.on("request",(req,res)=>{
//      const rsStream = fs.createReadStream("dataset.text");
//       rsStream.on("data",(chunkdata)=>{
//           res.write(chunkdata);
//       })
//       rsStream.on("end",(err,data)=>{
//           res.end();
//       })
//       rsStream.on("error",()=>{
//           console.log("Error found")
//           res.end("File not Found So Sorry")
//       })  
//  })

// this is a third METHODS
 
server.on("request",(req,res)=>{
     const data1 = fs.createReadStream("dataset.text");
     data1.pipe(res);
})

   server.listen(3000,()=>{
     console.log("Server started on port http://localhost:3000");
   })
