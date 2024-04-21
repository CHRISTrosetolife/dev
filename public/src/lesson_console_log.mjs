import {html_li_text} from "./html_li_text.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_span_text} from "./html_span_text.mjs";
export function lesson_console_log() {
    let v1 = {};
    object_property_set(v1, 'description', 'outputting a string to the console');
    object_property_set(v1, 'screens', [function lesson_console_log_1(parent) {
        let text = 'a computer program has three parts :';
        html_span_text(parent, text);
        let ol = html_element(parent, 'ol');
        html_li_text(ol, 'an input ,');
        html_li_text(ol, 'a process and');
        html_li_text(ol, 'an output');
    }]);
    return v1;
    ;
}
