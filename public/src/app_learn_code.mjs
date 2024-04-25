import {html_button_width_full} from "./html_button_width_full.mjs";
import {lesson_console_log} from "./lesson_console_log.mjs";
import {list_first} from "./list_first.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
export function app_learn_code() {
    let root = html_document_body();
    let lesson = lesson_console_log();
    let screens = object_property_get(lesson, 'screens');
    let screen_first = list_first(screens);
    screen_first(root);
    html_button_width_full(root);
}
