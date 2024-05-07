import {html_style_font_color} from "./html_style_font_color.mjs";
import {html_style_margin_default_value} from "./html_style_margin_default_value.mjs";
import {html_style_default_border_value} from "./html_style_default_border_value.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {json_to} from "./json_to.mjs";
import {html_div} from "./html_div.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {js_parse} from "./js_parse.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_style} from "./html_style.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
export function app_code_edit(context, file_path) {
    let root = html_document_body_clear();
    let container = html_div(root);
    html_style_background_color(container, 'black');
    let {files} = context;
    let contents = object_property_get(files, file_path);
    let ast = js_parse(contents);
    let node = ast;
    let parent = container;
    app_code_edit_recursive(node, parent);
}
function app_code_edit_recursive(node, parent) {
    let {type} = node;
    switch (type) {
        case 'Program': 
            let {body} = node;
            for (let b of body) {
                let child = html_div(parent);
                app_learn_code_style_rounded_padded(child);
                html_style_background_color(child, 'hsl(0, 0%, 20%)');
                html_style_font_color(child, 'white');
                html_style(child, {
                    'margin':'0.1dvh'
                });
                app_code_edit_recursive(b, child);
            }
            break;
        case 'ImportDeclaration':
            html_inner_set(parent, json_to(node));
            break;
        default:
            html_inner_set(parent, json_to(node));
    }
}