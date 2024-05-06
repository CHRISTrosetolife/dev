import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_p_text} from "./html_p_text.mjs";
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
