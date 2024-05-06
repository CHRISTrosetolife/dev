import {server_port} from "./server_port.mjs";
import express from 'express';
import cors from 'cors';
export function server() {
    const app = express()
    const port = server_port()

    let corsOptions = { 
        origin : ['http://localhost:8080'], 
     } 
       
     app.use(cors(corsOptions)) 
    
    app.post('/', (req, res) => {
        console.log(req.read())
      res.send('hi')
    })
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

    // let server = http.createServer(function (request, response) {
    //     response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    //     response.writeHead(200, {
    //         "Content-Type": "application/json",
    //         'Access-Control-Allow-Origin': '*'
    //     });
    //     console.log({request})
    //     response.end(read);
    // });
    // server.listen();
    // console.log("server running on port 8000");
}
