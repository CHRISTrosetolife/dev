import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {app_learn_code_code_part_titled} from "./app_learn_code_code_part_titled.mjs";
export function app_learn_code_code_part_titled_code(container, source) {
    let {code} = app_learn_code_code_part_titled(container, 'code :', source, 'black');
    app_learn_code_style_code_color(code);
}
