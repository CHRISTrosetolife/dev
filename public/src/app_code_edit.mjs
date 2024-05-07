import {html_div} from "./html_div.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {object_property_get} from "./object_property_get.mjs";
export function app_code_edit(context, file_path) {
    let root = html_document_body_clear();
    let container = html_div(root);
    let {files} = context;
    let contents = object_property_get(files, file_path);
}
