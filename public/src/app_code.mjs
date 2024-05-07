import {function_run} from "./function_run.mjs";
import {functions_source} from "./functions_source.mjs";
import {html_button_width_full_text} from "./html_button_width_full_text.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_style_default_initialize} from "./html_style_default_initialize.mjs";
import {object_properties} from "./object_properties.mjs";
export async function app_code() {
    let root = html_document_body();
    let result = await function_run(functions_source.name, []);
    html_style_default_initialize(root);
    let paths = object_properties(result);
    for (let p of paths) {
        html_button_width_full_text(root, p);
    }
}
