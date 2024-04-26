import {array_new} from "./array_new.mjs";
import {html_button_width_full_text_click} from "./html_button_width_full_text_click.mjs";
import {html_hr} from "./html_hr.mjs";
import {app_learn_code_code_part_titled_code} from "./app_learn_code_code_part_titled_code.mjs";
import {app_learn_code_code_container} from "./app_learn_code_code_container.mjs";
import {lesson_console_log_quiz_get} from "./lesson_console_log_quiz_get.mjs";
import {list_join} from "./list_join.mjs";
import {subtract} from "./subtract.mjs";
import {list_slice} from "./list_slice.mjs";
import {add} from "./add.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_length} from "./list_length.mjs";
import {string_split_space} from "./string_split_space.mjs";
import {range} from "./range.mjs";
export function lesson_console_log_quiz(parent) {
    let container = app_learn_code_code_container(parent);
    app_learn_code_code_part_titled_code(container, source);
    html_hr(container);
    let choices_count = 4;
    let r = range(choices_count);
    let choices = array_new();
    for (let c of r) {
        for (let i of range(100)) {
            let source = lesson_console_log_quiz_get();
        }
    }
    let button = html_button_width_full_text_click(root, 'previous', function on_click() {});
}
