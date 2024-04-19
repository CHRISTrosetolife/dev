import { html_inner_set } from "./html_inner_set.mjs";
import {html_span_text} from "./html_span_text.mjs";
export function lesson_console_log() {
    return {
        description: 'outputting a string to the console',
        screens: [parent => {
            let text = 'a computer program has three parts :';
            html_span_text(parent, text);
            let ol = html_element(parent, 'ol');
            let li = html_element(ol, 'li');
            html_inner_set(li, '(1) an input ,');
            '(2) a process and';
            '(3) an output';
        }]
    };
}
