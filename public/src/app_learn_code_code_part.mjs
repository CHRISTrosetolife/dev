import {app_learn_code_style_code} from "./app_learn_code_style_code.mjs";
import {html_style} from "./html_style.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_style_margin_none} from "./html_style_margin_none.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function app_learn_code_code_part(parent, title_text, source_code, background_color) {
    let title = html_p_text(parent, title_text);
    html_style_margin_none(title);
    html_spacer_vertical(parent);
    let code = html_p_text(parent, source_code);
    app_learn_code_style_code(code);
    html_style_margin_none(code);
    html_style(code, {
        'background-color': background_color,
        'white-space': 'initial',
    });
    return {
        code
    };
}
