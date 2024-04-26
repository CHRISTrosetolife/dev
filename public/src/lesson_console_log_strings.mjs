import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
import {app_learn_code_style_code_color} from "./app_learn_code_style_code_color.mjs";
import {app_learn_code_code_part} from "./app_learn_code_code_part.mjs";
import {html_li_text_monospace} from "./html_li_text_monospace.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {mod} from "./mod.mjs";
import {each_index} from "./each_index.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {noop} from "./noop.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {html_hr} from "./html_hr.mjs";
import {html_span_text} from "./html_span_text.mjs";
import {list_length} from "./list_length.mjs";
import {list_get} from "./list_get.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
export function lesson_console_log_strings(parent) {
    html_style_alternate(parent, html_p, [noop, html_style_bold], 
    ['in javascript , text , like letters and symbols , is called a ', 'string']);
    html_p_text(parent,        'here are some examples of strings :');
    app_learn_code_code_part_contrast(parent, '\'hello\'');
    html_spacer_vertical(parent);
    app_learn_code_code_part_contrast(parent, '\'strings can have spaces\'');
    html_spacer_vertical(parent);
    app_learn_code_code_part_contrast(parent, '\'strings can have numbers like 123\'');
    html_style_alternate(parent, html_p, [noop, html_style_monospace], ['notice that the beginning of a string has a quote ( ', '\'', ' ) and so does the end of a string']);
}
