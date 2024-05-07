import {html_clear} from "./html_clear.mjs";
import {html_document_body} from "./html_document_body.mjs";
export function html_document_body_clear() {
    let root = html_document_body();
    html_clear(root);
    return root;
}
