import {html_style_default_border_value} from "./html_style_default_border_value.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {json_to} from "./json_to.mjs";
import {html_div} from "./html_div.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {js_parse} from "./js_parse.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_style} from "./html_style.mjs";
export function app_code_edit(context, file_path) {
    let root = html_document_body_clear();
    let container = html_div(root);
    let {files} = context;
    let contents = object_property_get(files, file_path);
    let ast = js_parse(contents);
    html_inner_set(container, ast.type);
    let node = ast;
    let parent = container;
    let {type} = node;
    let lookup = {
        'Program': () => {
            let {body} = node;
            for (let b of body) {
                let child = html_div(parent);
                app_learn_code_style_rounded_padded(child);
                html_style(child, html_style_default_border_value('lightblue'));
                html_inner_set(child, json_to(b));
            }
        }
    };
    let choice = object_property_get(lookup, type);
    choice();
}
