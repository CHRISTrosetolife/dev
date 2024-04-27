import {app_learn_code_code_part_titled_output} from "./app_learn_code_code_part_titled_output.mjs";
import {html_hr} from "./html_hr.mjs";
import {app_learn_code_code_part_titled_code} from "./app_learn_code_code_part_titled_code.mjs";
import {app_learn_code_code_container} from "./app_learn_code_code_container.mjs";
export function app_learn_code_code(parent, code) {
    let container = app_learn_code_code_container(parent);
    app_learn_code_code_part_titled_code(container, code);
    html_hr(container);
    let output = app_learn_code_eval_to_string(source);
    app_learn_code_code_part_titled_output(container, output);
}
