import {js_declaration_single} from "./js_declaration_single.mjs";
import {html_div} from "./html_div.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {js_parse} from "./js_parse.mjs";
import {object_property_get} from "./object_property_get.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function app_code_edit(context, file_path) {
    let root = html_document_body_clear();
    let container = html_div(root);
    let {files} = context;
    let contents = object_property_get(files, file_path);
    let ast = js_parse(contents);
    html_inner_set(container,ast.type)
    let node = ast;
    let parent = container;
    let lookup = {
        'Program': () => {
            let {body} = node;
            for (let b of body) {
                let child = html_div(parent)
                html_inner_set(child, json_to(child))
            }
        }
    }
}
