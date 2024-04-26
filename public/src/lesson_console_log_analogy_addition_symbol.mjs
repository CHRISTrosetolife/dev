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
export function lesson_console_log_analogy_addition_symbol(parent) {
    html_p_text(parent, 'suppose the letters "a", "b" and "c" represent numbers');
    html_p_text(parent, 'suppose "c" is the sum of "a" and "b"');
    html_p_text(parent, 'then here is the equation : a + b = c');
    html_p_text(parent, 'we could say :');
    let ol2 = html_ul(parent);
    html_li_text(ol2, 'the addition sign ( "+" ) is a process');
    html_li_text(ol2, '"a" and "b" are the inputs to the "+" process');
    html_li_text(ol2, '"c" is the output of the "+" process');
}
