import {html_li_text} from "./html_li_text.mjs";
import {html_element} from "./html_element.mjs";
import {html_span_text} from "./html_span_text.mjs";
export function lesson_console_log_intro(parent) {
    html_span_text(parent, 'a computer program has three parts :');
    let ol = html_element(parent, 'ol');
    html_li_text(ol, 'an input ,');
    html_li_text(ol, 'a process and');
    html_li_text(ol, 'an output');
}
