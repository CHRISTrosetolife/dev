import {subtract_1} from "./subtract_1.mjs";
import {add_1} from "./add_1.mjs";
import {html_style_button_default} from "./html_style_button_default.mjs";
import {lesson_statements_two} from "./lesson_statements_two.mjs";
import {lesson_multiply} from "./lesson_multiply.mjs";
import {lesson_subtract} from "./lesson_subtract.mjs";
import {lesson_add} from "./lesson_add.mjs";
import {lesson_log_number} from "./lesson_log_number.mjs";
import {list_add_multiple} from "./list_add_multiple.mjs";
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
import {list_add} from "./list_add.mjs";
import {lesson_divide} from "./lesson_divide.mjs";
import {app_learn_code_style_rounded_padded_style} from "./app_learn_code_style_rounded_padded_style.mjs";
import {html_hr} from "./html_hr.mjs";
import {string_combine} from "./string_combine.mjs";
import {noop} from "./noop.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {list_index} from "./list_index.mjs";
import {list_take} from "./list_take.mjs";
import {list_sum} from "./list_sum.mjs";
import {each_index} from "./each_index.mjs";
import {add} from "./add.mjs";
export function app_learn_code() {
    let root = html_document_body();
    html_style(root, {
        'font-family': 'sans-serif'
    });
    object_merge(html_style_default(), {
        'font-size': '3vh'
    });
    object_merge(html_style_button_default(), app_learn_code_style_rounded_padded_style());
    object_merge(html_style_button_default(), {
        'margin': '0.5vh',
        'background-color': 'lightblue',
        'border': 'solid 0.5vh dodgerblue'
    });
    let lesson_creates = [];
    list_add(lesson_creates, lesson_console_log);
    list_add(lesson_creates, lesson_log_number);
    list_add(lesson_creates, lesson_add);
    list_add(lesson_creates, lesson_subtract);
    list_add(lesson_creates, lesson_multiply);
    list_add(lesson_creates, lesson_divide);
    list_add(lesson_creates, lesson_statements_two);
    let lesson_screens = [];
    let lessons = [];
    for (let lesson_create of lesson_creates) {
        let lesson = lesson_create();
        list_add(lessons, lesson);
        let s = object_property_get(lesson, 'screens');
        list_add_multiple(lesson_screens, s);
        console.log({
            lesson_screens,
            s
        });
    }
    function refresh_main() {
        html_clear(root);
        html_p_text(root, 'choose a lesson below');
        html_p_text(root, 'if you do not know what lesson to choose , then choose the first lesson');
        for (let lesson of lessons) {
            let {description} = lesson;
            html_button_width_full_text_click(root, description, () => refresh_lesson(lesson));
        }
    }
    refresh_main();
    let index_last = list_index_last(lesson_screens);
    function refresh_lesson(lesson) {
        html_clear(root);
        let lesson_index = list_index(lessons, lesson);
        let previous = list_take(lessons, lesson_index);
        let index_first = list_sum(s => {
            for (let p of previous) {
                let {screens} = p;
                s(list_length(screens));
            }
        });
        let {screens} = lesson;
        each_index(screens, (screen, index) => {
            html_button_width_full_text_click(root, string_combine('screen ', add_1(index)), () => refresh_lesson_screen(add(index_first, index)));
        });
    }
    function refresh_lesson_screen(index) {
        console.log({
            index,
            lesson_screens
        });
        html_clear(root);
        window.scrollTo({
            top: 0
        });
        let lesson_screen = list_get(lesson_screens, index);
        lesson_screen(root);
        html_hr(root);
        let button_next = html_button_width_full_text_click(root, 'next', function on_click() {
            refresh_lesson_screen(add_1(index));
        });
        let button_previous = html_button_width_full_text_click(root, 'previous', function on_click() {
            refresh_lesson_screen(subtract_1(index));
        });
        if (equal(index, 0)) {
            html_disable(button_previous);
        }
        if (equal(index, index_last)) {
            html_disable(button_next);
        }
    }
}
