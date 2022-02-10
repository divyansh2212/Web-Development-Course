const http = require("http")

const hostname = "127.1.1.0"
const port = 80

const server = http.createServer((req, res) => {
    res.end("Hello World!")
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})