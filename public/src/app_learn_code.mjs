import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {html_on_click} from "./html_on_click.mjs";
import {html_div} from "./html_div.mjs";
import {equal} from "./equal.mjs";
import {html_clear} from "./html_clear.mjs";
import {html_button_width_full_text} from "./html_button_width_full_text.mjs";
import {list_get} from "./list_get.mjs";
import {html_button_width_full} from "./html_button_width_full.mjs";
import {lesson_console_log} from "./lesson_console_log.mjs";
import {list_first} from "./list_first.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {list_length} from "./list_length.mjs";
import {list_index_last} from "./list_index_last.mjs";
export function app_learn_code() {
    let root = html_document_body();
    let lesson = lesson_console_log();
    let screens = object_property_get(lesson, 'screens');
    let index_last = list_index_last(screens);
    let content = html_div(root);
    let index = 0;
    let button_next = html_button_width_full_text_click(root, 'next', function on_click() {
        index++;
        refresh();
    });
    let button_previous = html_button_width_full_text_click(root, 'previous', function on_click() {
        index--;
        refresh();
    });
    refresh();
    function refresh() {
        let screen = list_get(list, index);
        html_clear(content);
        screen(content);
        button_previous.disabled = false;
        button_next.disabled = false;
        if (equal(index, 0)) {
            button_previous.disabled = true;
        }
        if (equal(index, index_last)) {
            button_next.disabled = true;
        }
    }
}
