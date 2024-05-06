import {function_run} from "./function_run.mjs";
import {json_from} from "./json_from.mjs";
import {server_port} from "./server_port.mjs";
import express from 'express';
import cors from 'cors';
export function server() {
    const app = express();
    const port = server_port();
    let corsOptions = {
        origin: ['http://localhost:8080']
    };
    app.use(cors(corsOptions));
    app.use(express.json());
    app.post('/', async (req, res) => {
        let {body} = req;
        let unparsed = json_from(body);
        await function_run;
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
