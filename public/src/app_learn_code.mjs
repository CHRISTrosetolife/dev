import {object_property_get} from "./object_property_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
export function app_learn_code() {
    let root = html_document_body();
    let lesson = lesson_console_log();
    let screens = object_property_get(lesson, 'screens');
}
