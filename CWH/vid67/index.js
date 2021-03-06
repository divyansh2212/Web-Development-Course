const http = require("http");
const fs = require("fs");

const hostName = "127.1.1.0";
const port = 3000;

const home = fs.readFileSync("home.html");
const about = fs.readFileSync("./about.html");
const services = fs.readFileSync("./services.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req, res) => {
    // console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (url == "/") {
    res.end(home);
  } else if (url == "/about") {
    res.end(about);
  } else if (url == "/services") {
    res.end(services);
  } else if (url == "/contact") {
    res.end(contact);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 NOT FOUND!</h1>");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}/`);
});
