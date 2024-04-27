import {app_learn_code_code_background} from "./app_learn_code_code_background.mjs";
import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {app_learn_code_code_part_titled} from "./app_learn_code_code_part_titled.mjs";
import { html_style } from "./html_style.mjs";
export function app_learn_code_code_part_titled_code(container, source) {
    let result = app_learn_code_code_part_titled(container, 'code :', source, app_learn_code_code_background());
    let {code} = result;
    app_learn_code_style_code_color(code);
    html_style(code, {
        'white-space': 'pre-wrap'
    })
    return result;
}
