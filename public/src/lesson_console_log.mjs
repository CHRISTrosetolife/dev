import {html_li_text} from "./html_li_text.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_span_text} from "./html_span_text.mjs";
export function lesson_console_log() {
    return {
        description: 'outputting a string to the console',
        screens: [parent => {
            let text = 'a computer program has three parts :';
            html_span_text(parent, text);
            let ol = html_element(parent, 'ol');
            html_li_text(ol, '(1) an input ,');
            '(2) a process and';
            '(3) an output';
        }]
    };
}
