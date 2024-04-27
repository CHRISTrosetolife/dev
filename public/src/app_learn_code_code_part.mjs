import {app_learn_code_code_part_generic} from "./app_learn_code_code_part_generic.mjs";
import {app_learn_code_style_code} from "./app_learn_code_style_code.mjs";
import {html_style} from "./html_style.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_style_margin_none} from "./html_style_margin_none.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function app_learn_code_code_part(parent, source_code, background_color) {
    return app_learn_code_code_part_generic(html_p_text, parent, source_code, background_color);
}
