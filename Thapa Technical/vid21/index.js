const http = require("http")
const fs = require("fs")

const port = 8000
const hostname = '127.1.1.0'

const server = http.createServer();

server.on("request", (req, res) => {

    // fs.readFile("input.txt", "utf-8", (err, data) => {
    //     if (err) return console.error(err)
    //     res.end(data)
    // })

    // 2nd Method
    const rstream = fs.createReadStream('input.txt')

    rstream.on("data", (chunkdata) => {
        res.write(chunkdata)
    })  

    rstream.on("end", () => {
        res.end();
    })

    rstream.on("error", (err) => {
        console.log(err);
        res.end("File not found!");
    })
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})