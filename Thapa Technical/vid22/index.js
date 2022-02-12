const http = require("http");
const fs = require("fs");

const hostname = '127.1.1.0'
const port = 8000

const server = http.createServer();

server.on("request", (req, res) => {

    // 3rd Method
    const rstream = fs.createReadStream("input.txt")

    rstream.pipe(res)
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})