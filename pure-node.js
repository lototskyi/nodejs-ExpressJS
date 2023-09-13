const http = require("http");

http.createServer((request, response) => {
    let = body = [];
    request.on("data", (chunk) => {
        body.push(chunk);
    });

    request.on("end", () => {
        body = Buffer.concat(body).toString();
        const userName = body.split("=")[1];
        console.log(userName);

        response.setHeader("Content-Type", "text/html");
        response.write(
            `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
        );
        response.end();
    });
}).listen(3000);
