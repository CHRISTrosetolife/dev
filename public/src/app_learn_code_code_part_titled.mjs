import {app_learn_code_code_part_title} from "./app_learn_code_code_part_title.mjs";
import {app_learn_code_code_part} from "./app_learn_code_code_part.mjs";
import {app_learn_code_style_code} from "./app_learn_code_style_code.mjs";
import {html_style} from "./html_style.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_style_margin_none} from "./html_style_margin_none.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function app_learn_code_code_part_titled(parent, title_text, source_code, background_color) {
    app_learn_code_code_part_title(parent, title_text);
    let code = app_learn_code_code_part(parent, source_code, background_color);
    return {
        code
    };
}
