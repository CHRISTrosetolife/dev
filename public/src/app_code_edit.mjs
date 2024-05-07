import {json_to} from "./json_to.mjs";
import {functions_source_set} from "./functions_source_set.mjs";
import {function_new_generic} from "./function_new_generic.mjs";
import {html_focus} from "./html_focus.mjs";
import {app_code_input} from "./app_code_input.mjs";
import {each_object} from "./each_object.mjs";
import {html_style_margin_x_0} from "./html_style_margin_x_0.mjs";
import {app_code_search_function} from "./app_code_search_function.mjs";
import {html_spellcheck_none} from "./html_spellcheck_none.mjs";
import {html_style_border_box} from "./html_style_border_box.mjs";
import {html_style_height_full} from "./html_style_height_full.mjs";
import {html_document_body_clear} from "./html_document_body_clear.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_style_width_full} from "./html_style_width_full.mjs";
import {html_style} from "./html_style.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {html_button} from "./html_button.mjs";
import {html_on_click} from "./html_on_click.mjs";
import {html_div} from "./html_div.mjs";
import {global_get} from "./global_get.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {html_value_get} from "./html_value_get.mjs";
import {function_run} from "./function_run.mjs";
export function app_code_edit(file_path) {
    let root = html_document_body_clear();
    let container = html_div(root);
    html_style(container, {
        'display': 'flex',
        'flex-direction': 'column'
    });
    html_style_height_full(container);
    let b = html_button(container);
    html_inner_set(b, 'menu');
    html_on_click(b, () => {
        let root = html_document_body_clear();
        let choices = {
            'search': () => {
                app_code_search_function();
            },
            'add new function': () => {
                let root = html_document_body_clear();
                let input = app_code_input(root);
                html_focus(input);
                let b = html_button_width_full_text_click(root, 'add new function', async () => {
                    let function_name = html_value_get(input);
                    await function_new_generic(function_name, '', '', false, [], false);
                    let file_path = function_name_to_path(function_name);
                    app_code_edit(file_path);
                });
                html_style_margin_x_0(b);
            },
            'save functions': async () => {
                let {files} = global_get();
                await function_run(functions_source_set.name, [files]);
                console.log('here')
            }
        };
        each_object(choices, lambda);
        function lambda(key, value) {
            let b = html_button_width_full_text_click(root, key, value);
            html_style_margin_x_0(b);
        }
    });
    let {files} = global_get();
    let contents = object_property_get(files, file_path);
    let ta = html_element(container, 'textarea');
    html_spellcheck_none(ta);
    html_style(ta, {
        'display': 'block'
    });
    html_style_border_box(ta);
    html_inner_set(ta, contents);
    html_style_width_full(ta);
    html_style_height_full(ta);
}
