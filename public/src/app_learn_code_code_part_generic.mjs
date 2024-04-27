import {html_style} from "./html_style.mjs";
import {html_style_margin_none} from "./html_style_margin_none.mjs";
import {app_learn_code_style_code} from "./app_learn_code_style_code.mjs";
export function app_learn_code_code_part_generic(create, parent, source_code, background_color) {
    let code = create(parent, source_code);
    app_learn_code_style_code(code);
    html_style_margin_none(code);
    html_style(code, {
        'background-color': background_color,
        'word-break': 'break-all'
    });
    return code;
}
