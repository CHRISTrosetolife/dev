import { html_inner_set } from "./html_inner_set.mjs";
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
function html_li_text(ol, text) {
    let li = html_li(ol);
    html_inner_set(li, text);
}

function html_li(ol) {
    return html_element(ol, 'li');
}

