import {lesson_console_log_unscramble} from "./lesson_console_log_unscramble.mjs";
import {lesson_console_log_quiz} from "./lesson_console_log_quiz.mjs";
import {lesson_console_log_javascript} from "./lesson_console_log_javascript.mjs";
import {lesson_console_log_process_named} from "./lesson_console_log_process_named.mjs";
import {lesson_console_log_process_computer_program} from "./lesson_console_log_process_computer_program.mjs";
import {list_add} from "./list_add.mjs";
import {array_new} from "./array_new.mjs";
import {object_new} from "./object_new.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {lesson_console_log_analogy_paper} from "./lesson_console_log_analogy_paper.mjs";
import {lesson_console_log_analogy_addition} from "./lesson_console_log_analogy_addition.mjs";
import {lesson_console_log_program_first} from "./lesson_console_log_program_first.mjs";
import {lesson_console_log_strings} from "./lesson_console_log_strings.mjs";
import {lesson_console_log_analogy_addition_symbol} from "./lesson_console_log_analogy_addition_symbol.mjs";
export function lesson_console_log() {
    let v1 = object_new();
    object_property_set(v1, 'description', 'outputting a string to the console');
    let v2 = array_new();
    list_add(v2, lesson_console_log_analogy_paper);
    list_add(v2, lesson_console_log_analogy_addition);
    list_add(v2, lesson_console_log_analogy_addition_symbol);
    list_add(v2, lesson_console_log_process_named);
    list_add(v2, lesson_console_log_javascript);
    list_add(v2, lesson_console_log_strings);
    list_add(v2, lesson_console_log_process_computer_program);
    list_add(v2, lesson_console_log_program_first);
    list_add(v2, app_learn_code_quiz(lesson_console_log_quiz));
    list_add(v2, lesson_console_log_unscramble);
    object_property_set(v1, 'screens', v2);
    return v1;
}
function app_learn_code_quiz(parent, source_get) {
    return parent => app_learn_code_quiz_inner(parent, source_get)
}