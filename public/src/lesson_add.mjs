import {app_learn_code_unscramble} from "./app_learn_code_unscramble.mjs";
import {lesson_log_number_quiz} from "./lesson_log_number_quiz.mjs";
import {app_learn_code_quiz} from "./app_learn_code_quiz.mjs";
import {lesson_log_number_example} from "./lesson_log_number_example.mjs";
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
import {lesson_log_number_explain} from "./lesson_log_number_explain.mjs";
export function lesson_add() {
    let v1 = object_new();
    object_property_set(v1, 'description', 'outputting a number to the console');
    let v2 = array_new();
    list_add(v2, lesson_log_number_example(lesson_log_number_quiz, 'adding a number'));
    list_add(v2, app_learn_code_quiz(lesson_log_number_quiz));
    list_add(v2, app_learn_code_unscramble(lesson_log_number_quiz));
    object_property_set(v1, 'screens', v2);
    return v1;
}
