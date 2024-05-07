import {html_style_button_default_initialize} from "./html_style_button_default_initialize.mjs";
import {html_style_default_font_size_value} from "./html_style_default_font_size_value.mjs";
import {html_style_default_font_size} from "./html_style_default_font_size.mjs";
import {html_style_sans_serif} from "./html_style_sans_serif.mjs";
export function html_style_default_initialize(root) {
    html_style_sans_serif(root);
    html_style_default_font_size(html_style_default_font_size_value());
    html_style_button_default_initialize();
}
