import {list_includes} from "./list_includes.mjs";
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
import {list_add} from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
export function lesson_console_log_quiz(parent) {
    let container = app_learn_code_code_container(parent);
    html_hr(container);
    let choices_count = 4;
    let r = range(choices_count);
    let choices = array_new();
    for (let c of r) {
        for (let i of range(100)) {
            let source = lesson_console_log_quiz_get();
            if (list_includes(choices, source)) {
                continue;
            }
            list_add(choices, source);
            break;
        }
    }
    let mapped = list_map(choices, c => {
        let source_augmented = `let log_old = console.log;
        let messages = [];
        console.log = message => messages.push(message);
        ${choice};
        console.log = log_old;
        messages;`;
        let messages = eval(source_augmented)
        return {
            source: c,
            messages
        }
    })
    let correct_index = integer_random(0, subtract(choices_count, 1))
    let correct = list_get(choices, correct_index);
    let {source} = correct;
    app_learn_code_code_part_titled_code(container, source);
    for (let m of mapped) {
        let {messages} = m;
        let button = html_button_width_full_text_click(container, 'previous', function on_click() {});
    }
}
