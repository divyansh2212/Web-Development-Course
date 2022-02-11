const http = require("http")
const fs = require("fs")

const hostname = '127.1.1.0'
const port = 8000

const server = http.createServer((req, res) => {

    const data = fs.readFileSync("userAPI.json", "utf-8")
    const objData = JSON.parse(data)

    res.statusCode = 200;
    if (req.url == "/") {
        res.setHeader("Content-type", "text/plain")
        res.end("Hello World")
    }
    else if (req.url == "/colorapi") {
        res.setHeader("Content-type", "application/json")
        res.end(JSON.stringify(objData[0]))
    }
    else {
        res.statusCode = 404
        res.setHeader("Content-type", "text/html")
        res.end("<h1>404 NOT FOUND!</h1>")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})