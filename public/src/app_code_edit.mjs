import {app_code_edit_recursive} from "./app_code_edit_recursive.mjs";
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
    
}
