import {lesson_console_log_quiz_value} from "./lesson_console_log_quiz_value.mjs";
import {list_join} from "./list_join.mjs";
import {subtract} from "./subtract.mjs";
import {list_slice} from "./list_slice.mjs";
import {add} from "./add.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_length} from "./list_length.mjs";
import {string_split_space} from "./string_split_space.mjs";
export function lesson_console_log_quiz() {
    let message = lesson_console_log_quiz_value();
    let code = `console.log('${message}');`;
    return code;
}
