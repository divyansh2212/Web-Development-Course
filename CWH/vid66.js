const http = require("http");
const fs = require("fs");
const { hostname } = require("os");

const port = 8000;
const hostName = "127.1.1.0";

const fileContent = fs.readFileSync("vid55.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(fileContent);
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
