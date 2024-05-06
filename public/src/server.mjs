import {server_port} from "./server_port.mjs";
import http from 'http';
export function server() {
    let server = http.createServer(function (request, response) {
        let read = request.read();
        response.writeHead(200, {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        });
        response.end(read);
    });
    server.listen(server_port());
    console.log("server running on port 8000");
}
