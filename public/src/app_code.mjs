import {function_run} from "./function_run.mjs";
import {functions_source} from "./functions_source.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import { html_style_button_default_initialize } from "./html_style_button_default_initialize.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import {http_post} from "./http_post.mjs";
import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import { object_properties } from "./object_properties.mjs";
import {server_port} from "./server_port.mjs";
export async function app_code() {
    let root = html_document_body();
    html_style_default_initialize(root);
    let result = await function_run(functions_source.name, []);
    let paths = object_properties(result);
    for (let p of paths) {
        
    }
}
