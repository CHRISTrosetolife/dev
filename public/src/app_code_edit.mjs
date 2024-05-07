import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
export function app_code_edit(context, file_path) {
    let root = html_document_body_clear();
    let {files} = context;
    let contents = object_property_get(files, file_path);
    let ta = html_element(root, 'textarea');
    html_inner_set(ta, contents);
}
