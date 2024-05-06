import {json_to} from "./json_to.mjs";
import {function_run} from "./function_run.mjs";
import {json_from} from "./json_from.mjs";
import {server_port} from "./server_port.mjs";
import express from 'express';
import cors from 'cors';
export function server() {
    let app = express();
    let port = server_port();
    let options = {
        origin: ['http://localhost:8080']
    };
    app.use(cors(options));
    app.use(express.json());
    app.post('/', async (req, res) => {
        let {body} = req;
        console.log({
            body
        });
        let {function_name, args} = body;
        let result = await function_run(function_name, args);
        res.end(json_to(result));
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
