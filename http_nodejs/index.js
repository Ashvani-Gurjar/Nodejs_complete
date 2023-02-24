const https = require("http");

const server = https.createServer((req, res) => {
     res.end("Hello I am Ashvani Singh Gurjar");
})

server.listen(3000,() => {
     console.log(`Server is running on port http://localhost:3000 `);
})