import {html_style_default} from "./html_style_default.mjs";
import {html_disable} from "./html_disable.mjs";
import {html_enable} from "./html_enable.mjs";
import {string_prefix_without} from "./string_prefix_without.mjs";
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
import {html_style} from "./html_style.mjs";
import {object_merge} from "./object_merge.mjs";
export function app_learn_code() {
    let root = html_document_body();
    html_style(root, {
        'font-family': 'sans-serif'
    });
    object_merge(html_style_default(), {
        'font-size': '4vh'
    });
    let lesson = lesson_console_log();
    let screens = object_property_get(lesson, 'screens');
    let index_last = list_index_last(screens);
    let content = html_div(root);
    let {hash} = window.location;
    hash = string_prefix_without(hash, '#');
    let index = parseInt(hash, 10) || 0;
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
        let screen = list_get(screens, index);
        html_clear(content);
        screen(content);
        html_enable(button_previous);
        html_enable(button_next);
        if (equal(index, 0)) {
            html_disable(button_previous);
        }
        if (equal(index, index_last)) {
            html_disable(button_next);
        }
    }
}
