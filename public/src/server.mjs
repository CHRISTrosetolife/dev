import {uuid_file} from "./uuid_file.mjs";
import {command_line} from "./command_line.mjs";
import {json_to} from "./json_to.mjs";
import {server_port} from "./server_port.mjs";
import express from 'express';
import cors from 'cors';
import {function_run_json} from "./function_run_json.mjs";
import {string_replace} from "./string_replace.mjs";
import {run} from "./run.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
import { file_read } from "./file_read.mjs";
import bodyParser from "body-parser";
export function server() {
    let app = express();
    let port = server_port();
    let options = {
        origin: ['http://localhost:8080']
    };
    app.use(cors(options));
    app.use(express.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb'}));
    app.post('/', async (req, res) => {
        let {body} = req;
        let {function_name, args} = body;
        let args_json = json_to({
            args
        });
        let replaced = string_replace(args_json, '\'', '\'\'');
        replaced = string_replace(replaced, '"', '\\"');
        await uuid_file(async file_path => {
            let command = `node ${run.name}.mjs ${function_run_json.name} ${function_name} '${replaced}' ${file_path}`;
            let r = await command_line(command);
            console.log({r})
            let contents = await file_read(file_path)
            await file_overwrite('log.txt', contents);
            res.end(contents);
        })
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
