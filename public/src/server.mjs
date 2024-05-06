import {server_port} from "./server_port.mjs";
import {http} from 'http';
export function server() {
    var server = http.createServer(function (request, response) {
        response.writeHead(200, {
            "Content-Type": "text\plain"
        });
        if (request.method == "GET") {
            response.end("received GET request.");
        } else if (request.method == "POST") {
            response.end("received POST request.");
        } else {
            response.end("Undefined request .");
        }
    });
    server.listen(server_port());
    console.log("Server running on port 8000");
}
