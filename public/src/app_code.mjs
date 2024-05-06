import {function_run} from "./function_run.mjs";
import {functions_source} from "./functions_source.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {http_post} from "./http_post.mjs";
import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import {server_port} from "./server_port.mjs";
export async function app_code() {
    let root = html_document_body();
    let result = await function_run(functions_source.name, []);
    console.log({
        result
    });
    html_inner_set(root, json_to(result));
}
