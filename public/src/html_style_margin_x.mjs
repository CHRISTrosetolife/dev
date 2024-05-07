import {html_style} from "./html_style.mjs";
export function html_style_margin_y(component, y_margin) {
    html_style(component, {
        'margin-top': y_margin,
        'margin-bottom': y_margin
    });
}
