import {html_value_set} from "./html_value_set.mjs";
import {html_style_display_none} from "./html_style_display_none.mjs";
import {html_style_display_block} from "./html_style_display_block.mjs";
import {list_to} from "./list_to.mjs";
import {list_join} from "./list_join.mjs";
import {html_style_word_break_all} from "./html_style_word_break_all.mjs";
import {html_button_width_full_text_click_x_0} from "./html_button_width_full_text_click_x_0.mjs";
import {html_on_input_value} from "./html_on_input_value.mjs";
import {function_path_to_name} from "./function_path_to_name.mjs";
import {list_adder} from "./list_adder.mjs";
import {identity} from "./identity.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import {object_properties} from "./object_properties.mjs";
import {html_focus} from "./html_focus.mjs";
import {app_code_input} from "./app_code_input.mjs";
import {app_code_back} from "./app_code_back.mjs";
import {app_code_button_back_text} from "./app_code_button_back_text.mjs";
import {list_length} from "./list_length.mjs";
import {greater_than_equal} from "./greater_than_equal.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {global_get} from "./global_get.mjs";
export function app_code_search_function_generic(input_value_initial, on_click_get) {
    let global = global_get();
    let {files, back_stack} = global;
    let root = html_document_body_clear();
    if (greater_than_equal(list_length(back_stack), 2)) {
        lambda_button(app_code_button_back_text(), app_code_back);
    }
    let input = app_code_input(root);
    html_focus(input);
    let paths = object_properties(files);
    list_sort_string(paths, identity);
    let list = list_adder(la => {
        for (let p of paths) {
            let name = function_path_to_name(p);
            let button = lambda_button(name, on_click_get(p));
            la({
                name,
                button: button
            });
        }
    });
    html_on_input_value(input, lambda);
    html_value_set(input, input_value_initial);
    function lambda_button(name, on_click) {
        let b = html_button_width_full_text_click_x_0(root, name, on_click);
        html_style_word_break_all(b);
        return b;
    }
    function lambda(value) {
        for (let e of list) {
            let {name, button} = e;
            let regex = list_join(list_to(value), '.*');
            if (name.match(regex)) {
                html_style_display_block(button);
            } else {
                html_style_display_none(button);
            }
        }
    }
}
