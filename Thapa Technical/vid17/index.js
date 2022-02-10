const http = require("http")

const hostname = "127.1.1.0";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain")

    if (req.url == "/") {
        res.end("Hello! This is home side")
    }
    else if (req.url == "/home") {
        res.end("Hello! This is home side")
    }
    else if (req.url == "/about") {
        res.end("Hello! This is about page")
    }
    else if (req.url == "/services") {
        res.end("Hello! This is services page")
    }
    else if (req.url == "/contact") {
        res.end("Hello! This is contact page")
    }
    else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end("<h1>404 not found!</h1>")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})