const http = require("http");
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("Home Page");
     }
     else if(url === '/about'){
        res.writeHead(200, {"Content-Type":"application/json"});
        const aboutData = { name : "Boss", role: "Developer" };
        res.end(JSON.stringify(aboutData));
     }
     else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("404 Not Found");
     }
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
