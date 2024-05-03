import {html_style_margin_y} from "./html_style_margin_y.mjs";
import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {app_learn_code_code_part} from "./app_learn_code_code_part.mjs";
export function app_learn_code_code_part_contrast(parent, code) {
    let component = app_learn_code_code_part(parent, code, 'black');
    app_learn_code_style_code_color(component);
    html_style_margin_y(component, '0.5dvh');
}
