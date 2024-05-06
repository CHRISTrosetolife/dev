import {run_git} from "./run_git.mjs";
import {command_line} from "./command_line.mjs";
import {json_to} from "./json_to.mjs";
import {function_run} from "./function_run.mjs";
import {json_from} from "./json_from.mjs";
import {server_port} from "./server_port.mjs";
import express from 'express';
import cors from 'cors';
import {function_run_json} from "./function_run_json.mjs";
import {string_replace} from "./string_replace.mjs";
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
        let args_json = json_to(args);
        let replaced = string_replace(args_json, '\'', '\'\'');
        let result = await command_line(`node ${run_git.name}.mjs ${function_run_json.name} ${function_name} '${replaced}`);
        res.end(json_to(result));
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
