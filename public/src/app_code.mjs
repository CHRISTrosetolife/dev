import {html_style_border_box} from "./html_style_border_box.mjs";
import {html_focus} from "./html_focus.mjs";
import {html_style_margin_x} from "./html_style_margin_x.mjs";
import {html_style_word_break_all} from "./html_style_word_break_all.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {function_path_to_name} from "./function_path_to_name.mjs";
import {function_run} from "./function_run.mjs";
import {functions_source} from "./functions_source.mjs";
import {html_button_width_full_text} from "./html_button_width_full_text.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_element} from "./html_element.mjs";
import {html_style_default_initialize} from "./html_style_default_initialize.mjs";
import {html_style_width_full} from "./html_style_width_full.mjs";
import {object_properties} from "./object_properties.mjs";
export async function app_code() {
    html_style_default_initialize();
    let result = await function_run(functions_source.name, []);
    let root = html_document_body();
    let input = html_element(root, 'input');
    html_focus(input);
    html_style_width_full(input);
    html_style_border_box(input);
    app_learn_code_style_rounded_padded(input);
    let paths = object_properties(result);
    for (let p of paths) {
        let name = function_path_to_name(p);
        let b = html_button_width_full_text(root, name);
        html_style_margin_x(b, '0');
        html_style_word_break_all(b);
    }
}
