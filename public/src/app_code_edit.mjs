import {js_export_single} from "./js_export_single.mjs";
import {html_div} from "./html_div.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {js_parse} from "./js_parse.mjs";
import {object_property_get} from "./object_property_get.mjs";
export function app_code_edit(context, file_path) {
    let root = html_document_body_clear();
    let container = html_div(root);
    let {files} = context;
    let contents = object_property_get(files, file_path);
    let parsed = js_parse(contents);
    let e = js_export_single(parsed);
    console.log({e})
}
