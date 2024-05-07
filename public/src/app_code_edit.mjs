import {html_div} from "./html_div.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {js_parse} from "./js_parse.mjs";
import {object_property_get} from "./object_property_get.mjs";
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
                    'margin': '0.3dvh'
                });
                app_code_edit_recursive(b, child);
            }
            break;
        case 'ImportDeclaration':
            html_style_word_break_all(parent);
            let {specifiers} = node;
            html_inner_set(parent, json_to(specifiers));
            break;
        default:
            html_inner_set(parent, json_to(node));
    }
}
