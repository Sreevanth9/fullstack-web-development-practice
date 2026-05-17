const http = require("http");
const fs = require("fs");

const { add } = require("./math");

const server = http.createServer((req, res) => {

    if(req.url === "/"){

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Home");
    }

    else if(req.url === "/about"){

        const result = add(10, 20);

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(`Sum is ${result}`);
    }

    else if(req.url === "/contact"){

        fs.readFile("data.txt", "utf8", (err, data) => {

            if(err){
                res.statusCode = 500;
                res.end("Error reading file");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/plain"
            });

            res.end(data);
        });
    }

    else if(req.url === "/json"){

        const data = {
            name: "Sreevanth",
            role: "Developer"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(data));
    }

    else{

        res.statusCode = 404;
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});