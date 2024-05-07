import {app_code_back} from "./app_code_back.mjs";
import {app_code_button_back_text} from "./app_code_button_back_text.mjs";
import {greater_than_equal} from "./greater_than_equal.mjs";
import {app_code_backable} from "./app_code_backable.mjs";
import {html_on_input_value} from "./html_on_input_value.mjs";
import {app_code_input} from "./app_code_input.mjs";
import {html_style_display_none} from "./html_style_display_none.mjs";
import {html_style_display_block} from "./html_style_display_block.mjs";
import {string_includes} from "./string_includes.mjs";
import {html_style_margin_x_0} from "./html_style_margin_x_0.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {app_code_edit} from "./app_code_edit.mjs";
import {html_style_word_break_all} from "./html_style_word_break_all.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {function_path_to_name} from "./function_path_to_name.mjs";
import {object_properties} from "./object_properties.mjs";
import {html_focus} from "./html_focus.mjs";
import {list_adder} from "./list_adder.mjs";
import {global_get} from "./global_get.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import {identity} from "./identity.mjs";
import {list_length} from "./list_length.mjs";
export function app_code_search_function() {
    let global = global_get();
    let {files, back_stack} = global;
    let root = html_document_body_clear();
    if (greater_than_equal(list_length(back_stack), 2)) {
        html_button_width_full_text_click(root, app_code_button_back_text(), app_code_back);
    }
    let input = app_code_input(root);
    html_focus(input);
    let paths = object_properties(files);
    list_sort_string(paths, identity);
    let list = list_adder(la => {
        for (let p of paths) {
            let name = function_path_to_name(p);
            let button = html_button_width_full_text_click(root, name, () => {
                app_code_backable(() => app_code_edit(p));
            });
            html_style_margin_x_0(button);
            html_style_word_break_all(button);
            la({
                name,
                button
            });
        }
    });
    html_on_input_value(input, lambda);
    function lambda(value) {
        for (let e of list) {
            let {name, button} = e;
            if (string_includes(name, value)) {
                html_style_display_block(button);
            } else {
                html_style_display_none(button);
            }
        }
    }
}
