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
        console.log({body})
        let unparsed = json_from(body);
        let {function_name, args} = unparsed;
        await function_run(function_name, args);
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
