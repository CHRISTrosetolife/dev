import {html_button_width_full_text} from "./html_button_width_full_text.mjs";
import {list_get} from "./list_get.mjs";
import {html_button_width_full} from "./html_button_width_full.mjs";
import {lesson_console_log} from "./lesson_console_log.mjs";
import {list_first} from "./list_first.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
export function app_learn_code() {
    let root = html_document_body();
    let lesson = lesson_console_log();
    let screens = object_property_get(lesson, 'screens');
    let index = 0;
    let screen = list_get(list, index);
    html_clear(root);
    screen(root);
    let button_next = html_button_width_full_text(root, 'next');
    let button_previous = html_button_width_full_text(root, 'previous');
}
function html_clear(root) {
    html_inner_set(root, '');
}

