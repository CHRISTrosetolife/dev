import {lesson_if_else_string_concat_if_else} from "./lesson_if_else_string_concat_if_else.mjs";
import {lesson_if_else_string_concat_if} from "./lesson_if_else_string_concat_if.mjs";
import {lesson_if_else_string_concat_variables_two} from "./lesson_if_else_string_concat_variables_two.mjs";
import {lesson_if_else_string_concat_three} from "./lesson_if_else_string_concat_three.mjs";
import {lesson_if_else_if_else_inside_else} from "./lesson_if_else_if_else_inside_else.mjs";
import {lesson_if_else_if_inside_else} from "./lesson_if_else_if_inside_else.mjs";
import {lesson_variables_declare_shorthand} from "./lesson_variables_declare_shorthand.mjs";
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
import {lesson_variable_shorthand} from "./lesson_variable_shorthand.mjs";
import {lesson_variables_two} from "./lesson_variables_two.mjs";
import {lesson_variable_change_2} from "./lesson_variable_change_2.mjs";
import {lesson_add_numbers_three} from "./lesson_add_numbers_three.mjs";
import {lesson_variables_three} from "./lesson_variables_three.mjs";
import {lesson_if_true} from "./lesson_if_true.mjs";
import {lesson_if_false} from "./lesson_if_false.mjs";
import {lesson_if_binary} from "./lesson_if_binary.mjs";
import {lesson_if_variable} from "./lesson_if_variable.mjs";
import {lesson_variable_binary} from "./lesson_variable_binary.mjs";
import {lesson_if_else} from "./lesson_if_else.mjs";
import {lesson_if_else_zero} from "./lesson_if_else_zero.mjs";
import {lesson_if_else_positive} from "./lesson_if_else_positive.mjs";
import {lesson_if_else_negative} from "./lesson_if_else_negative.mjs";
import {lesson_if_else_if} from "./lesson_if_else_if.mjs";
import {lesson_mod} from "./lesson_mod.mjs";
import {lesson_mod_even} from "./lesson_mod_even.mjs";
import {lesson_if_else_nested_if} from "./lesson_if_else_nested_if.mjs";
import {lesson_if_else_nested_if_else} from "./lesson_if_else_nested_if_else.mjs";
import {lesson_if_else_string_concat} from "./lesson_if_else_string_concat.mjs";
import {lesson_if_else_string_concat_variable} from "./lesson_if_else_string_concat_variable.mjs";
import {lesson_if_else_if_two} from "./lesson_if_else_if_two.mjs";
import {lesson_if_else_string_empty} from "./lesson_if_else_string_empty.mjs";
import { lesson_if_else_ternary } from "./lesson_if_else_ternary.mjs";
import { lesson_if_else_ternary_two } from "./lesson_if_else_ternary_two.mjs";
import { lesson_if_else_ternary_parity } from "./lesson_if_else_ternary_parity.mjs";
export function app_learn_code_modules() {
    let modules = [];
    let module_current;
    module_current = [];
    list_add(modules, {
        name: 'output , processes , statements',
        lessons: module_current
    });
    list_add(module_current, lesson_console_log);
    list_add(module_current, lesson_log_number);
    if (0) {
        module_current = [];
        list_add(modules, {
            name: 'temp',
            lessons: module_current
        });
    }
    list_add(module_current, lesson_add);
    list_add(module_current, lesson_subtract);
    list_add(module_current, lesson_multiply);
    list_add(module_current, lesson_divide);
    list_add(module_current, lesson_less_than);
    list_add(module_current, lesson_greater_than);
    list_add(module_current, lesson_equal_number);
    list_add(module_current, lesson_equal_string);
    list_add(module_current, lesson_less_than_equal);
    list_add(module_current, lesson_greater_than_equal);
    list_add(module_current, lesson_equal_not_number);
    list_add(module_current, lesson_equal_not_string);
    list_add(module_current, lesson_statements_two);
    list_add(module_current, lesson_statements_three);
    module_current = [];
    list_add(modules, {
        name: 'variables',
        lessons: module_current
    });
    list_add(module_current, lesson_log_boolean);
    list_add(module_current, lesson_variable);
    list_add(module_current, lesson_variable_log_twice);
    list_add(module_current, lesson_variable_change);
    list_add(module_current, lesson_variable_shorthand);
    list_add(module_current, lesson_variable_change_2);
    list_add(module_current, lesson_variables_two);
    list_add(module_current, lesson_variables_declare_shorthand);
    list_add(module_current, lesson_add_numbers_three);
    list_add(module_current, lesson_variables_three);
    list_add(module_current, lesson_variable_binary);
    module_current = [];
    list_add(modules, {
        name: '`if` `else` simple',
        lessons: module_current
    });
    list_add(module_current, lesson_if_true);
    list_add(module_current, lesson_if_false);
    list_add(module_current, lesson_if_binary);
    list_add(module_current, lesson_if_variable);
    list_add(module_current, lesson_if_else);
    list_add(module_current, lesson_if_else_zero);
    list_add(module_current, lesson_if_else_positive);
    list_add(module_current, lesson_if_else_negative);
    list_add(module_current, lesson_mod);
    list_add(module_current, lesson_mod_even);
    module_current = [];
    list_add(modules, {
        name: '`if` `else` compound',
        lessons: module_current
    });
    list_add(module_current, lesson_if_else_if_two);
    list_add(module_current, lesson_if_else_if);
    list_add(module_current, lesson_if_else_nested_if);
    list_add(module_current, lesson_if_else_nested_if_else);
    list_add(module_current, lesson_if_else_if_inside_else);
    list_add(module_current, lesson_if_else_if_else_inside_else);
    list_add(module_current, lesson_if_else_string_concat);
    list_add(module_current, lesson_if_else_string_concat_three);
    list_add(module_current, lesson_if_else_string_concat_variable);
    list_add(module_current, lesson_if_else_string_concat_variables_two);
    list_add(module_current, lesson_if_else_string_empty);
    list_add(module_current, lesson_if_else_string_concat_if);
    list_add(module_current, lesson_if_else_string_concat_if_else);
    list_add(module_current, lesson_if_else_ternary);
    list_add(module_current, lesson_if_else_ternary_parity);
    list_add(module_current, lesson_if_else_ternary_two);
    return modules;
}
