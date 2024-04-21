import {object_new} from "./object_new.mjs";
import {lesson_console_log_intro} from "./lesson_console_log_intro.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_span_text} from "./html_span_text.mjs";
export function lesson_console_log() {
    let v1 = object_new();
    object_property_set(v1, 'description', 'outputting a string to the console');
    let v2 = [lesson_console_log_intro];
    object_property_set(v1, 'screens', v2);
    return v1;
    ;
}
