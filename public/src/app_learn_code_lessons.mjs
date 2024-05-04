import {lesson_variable_change} from "./lesson_variable_change.mjs";
import {lesson_log_boolean} from "./lesson_log_boolean.mjs";
import {lesson_statements_three} from "./lesson_statements_three.mjs";
import {lesson_statements_two} from "./lesson_statements_two.mjs";
import {lesson_equal_string} from "./lesson_equal_string.mjs";
import {lesson_equal_number} from "./lesson_equal_number.mjs";
import {lesson_greater_than_equal} from "./lesson_greater_than_equal.mjs";
import {lesson_less_than_equal} from "./lesson_less_than_equal.mjs";
import {lesson_greater_than} from "./lesson_greater_than.mjs";
import {lesson_less_than} from "./lesson_less_than.mjs";
import {lesson_divide} from "./lesson_divide.mjs";
import {lesson_multiply} from "./lesson_multiply.mjs";
import {lesson_subtract} from "./lesson_subtract.mjs";
import {lesson_add} from "./lesson_add.mjs";
import {lesson_log_number} from "./lesson_log_number.mjs";
import {lesson_console_log} from "./lesson_console_log.mjs";
import {list_add} from "./list_add.mjs";
import {lesson_equal_not_number} from "./lesson_equal_not_number.mjs";
import {lesson_equal_not_string} from "./lesson_equal_not_string.mjs";
import {lesson_variable} from "./lesson_variable.mjs";
import {lesson_variable_log_twice} from "./lesson_variable_log_twice.mjs";
import { lesson_variable_shorthand } from "./lesson_variable_shorthand.mjs";
import { lesson_variables_two } from "./lesson_variables_two.mjs";
import { lesson_variable_change_2 } from "./lesson_variable_change_2.mjs";
export function app_learn_code_lessons() {
    let lesson_creates = [];
    list_add(lesson_creates, lesson_console_log);
    list_add(lesson_creates, lesson_log_number);
    list_add(lesson_creates, lesson_add);
    list_add(lesson_creates, lesson_subtract);
    list_add(lesson_creates, lesson_multiply);
    list_add(lesson_creates, lesson_divide);
    list_add(lesson_creates, lesson_less_than);
    list_add(lesson_creates, lesson_greater_than);
    list_add(lesson_creates, lesson_equal_number);
    list_add(lesson_creates, lesson_equal_string);
    list_add(lesson_creates, lesson_less_than_equal);
    list_add(lesson_creates, lesson_greater_than_equal);
    list_add(lesson_creates, lesson_equal_not_number);
    list_add(lesson_creates, lesson_equal_not_string);
    list_add(lesson_creates, lesson_statements_two);
    list_add(lesson_creates, lesson_statements_three);
    list_add(lesson_creates, lesson_log_boolean);
    list_add(lesson_creates, lesson_variable);
    list_add(lesson_creates, lesson_variable_log_twice);
    list_add(lesson_creates, lesson_variable_change);
    list_add(lesson_creates, lesson_variable_shorthand);
    list_add(lesson_creates, lesson_variable_change_2);
    list_add(lesson_creates, lesson_variables_two);
    
    return lesson_creates;
}
