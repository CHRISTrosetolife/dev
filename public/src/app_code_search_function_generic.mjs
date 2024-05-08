import {list_take} from "./list_take.mjs";
import {string_regex_match} from "./string_regex_match.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {list_sort} from "./list_sort.mjs";
import {html_value_set} from "./html_value_set.mjs";
import {list_to} from "./list_to.mjs";
import {list_join} from "./list_join.mjs";
import {html_style_word_break_all} from "./html_style_word_break_all.mjs";
import {html_button_width_full_text_click_x_0} from "./html_button_width_full_text_click_x_0.mjs";
import {html_on_input_value} from "./html_on_input_value.mjs";
import {function_path_to_name} from "./function_path_to_name.mjs";
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
import {string_length} from "./string_length.mjs";
import {html_div} from "./html_div.mjs";
import {html_clear} from "./html_clear.mjs";
import {list_filter} from "./list_filter.mjs";
export function app_code_search_function_generic(input_value_initial, on_click_get) {
    let global = global_get();
    let {files, back_stack} = global;
    let root = html_document_body_clear();
    if (greater_than_equal(list_length(back_stack), 2)) {
        lambda_button(root, app_code_button_back_text(), app_code_back);
    }
    let input = app_code_input(root);
    html_focus(input);
    let container_buttons = html_div(root);
    let paths = object_properties(files);
    list_sort_string(paths, identity);
    list_sort(paths, p => string_length(p));
    html_on_input_value(input, lambda);
    html_value_set(input, input_value_initial);
    lambda(input_value_initial);
    function lambda_button(parent, name, on_click) {
        let b = html_button_width_full_text_click_x_0(parent, name, on_click);
        html_style_word_break_all(b);
        return b;
    }
    function lambda(value) {
        html_clear(container_buttons);
        let value_list = list_to(value);
        let filtered = list_filter(paths, p => {
            let name = function_path_to_name(p);
            let regex = list_join(value_list, '.*');
            return string_regex_match(name, regex);
        });
        let taken = list_take(filtered, 20);
        for (let p of taken) {
            let name = function_path_to_name(p);
            let button = lambda_button(container_buttons, name, on_click_get(p));
            html_style_monospace(button);
        }
    }
}
