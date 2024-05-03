import {identity} from "./identity.mjs";
import {keyboard_keys} from "./keyboard_keys.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {lesson_add_quiz} from "./lesson_add_quiz.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
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
import {noop} from "./noop.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {list_concat} from "./list_concat.mjs";
import {list_concat_multiple} from "./list_concat_multiple.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random } from "./integer_random.mjs";
import { equal } from "./equal.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { lesson_console_log_quiz_value } from "./lesson_console_log_quiz_value.mjs";
export function lesson_variable() {
    let example_message = 'outputting a variable to the console';
    let description = example_message;
    return lesson_simple(function () {
        let ks = keyboard_keys();
        let name = list_random_item(ks);
        let value;
        let r = integer_random(1,3)
        if (equal(r,1)) {
            value = integer_random_digit_single();
        } else if (equal(r,2)) {
            value = random_50_50();
        } else {
            value = lesson_console_log_quiz_value();
        }
        return `let ${name};
${name} = ${value};
console.log(${random_50_50()});`;
    }, example_before, description, example_message, []);
    function example_before(parent) {
        'to use a variable , javascript must know about the variable';
        'to tell javascript about a variable named variable_name write :';
        'let variable_name;';
        'eventually variables should be given a value';
        'to give a variable named variable name a value of 123 write :';
        'variable_name = 123;';
        'in javascript = does not check if two things are equal';
        'instead = can be used to give a variable a value';
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['boolean ', 'true', ' and ', 'false', ' can be used in code :']);
    }
}
