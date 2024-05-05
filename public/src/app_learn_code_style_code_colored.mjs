import {app_learn_code_style_code} from "./app_learn_code_style_code.mjs";
import {app_learn_code_style_code_color_background} from "./app_learn_code_style_code_color_background.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
export function app_learn_code_style_code_colored(component) {
    app_learn_code_style_code_color(component);
    html_style_background_color(component, app_learn_code_style_code_color_background());
    app_learn_code_style_code(component);
}
