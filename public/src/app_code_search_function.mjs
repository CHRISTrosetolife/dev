import {app_code_input} from "./app_code_input.mjs";
import {html_style_display_none} from "./html_style_display_none.mjs";
import {html_style_display_block} from "./html_style_display_block.mjs";
import {string_includes} from "./string_includes.mjs";
import {html_value_get} from "./html_value_get.mjs";
import {html_style_margin_x_0} from "./html_style_margin_x_0.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {app_code_edit} from "./app_code_edit.mjs";
import {html_style_word_break_all} from "./html_style_word_break_all.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {function_path_to_name} from "./function_path_to_name.mjs";
import {object_properties} from "./object_properties.mjs";
import {html_focus} from "./html_focus.mjs";
import {html_on} from "./html_on.mjs";
import {list_adder} from "./list_adder.mjs";
export function app_code_search_function(context) {
    let {files} = context;
    let root = html_document_body_clear();
    let input = app_code_input(root);
    html_focus(input);
    let paths = object_properties(files);
    let list = list_adder(la => {
        for (let p of paths) {
            let name = function_path_to_name(p);
            let button = html_button_width_full_text_click(root, name, () => {
                app_code_edit(context, p);
            });
            html_style_margin_x_0(button);
            html_style_word_break_all(button);
            la({
                name,
                button
            });
        }
    });
    html_on(input, 'input', () => {
        let value = html_value_get(input);
        for (let e of list) {
            let {name, button} = e;
            if (string_includes(name, value)) {
                html_style_display_block(button);
            } else {
                html_style_display_none(button);
            }
        }
    });
}
