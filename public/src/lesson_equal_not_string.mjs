import {lesson_comparisons_source_get_get} from "./lesson_comparisons_source_get_get.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {lesson_add_quiz} from "./lesson_add_quiz.mjs";
import {html_p} from "./html_p.mjs";
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
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {noop} from "./noop.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {list_map} from "./list_map.mjs";
import {list_join} from "./list_join.mjs";
import {integer_random} from "./integer_random.mjs";
import {equal} from "./equal.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {lesson_log_number_quiz_value} from "./lesson_log_number_quiz_value.mjs";
import {lesson_console_log_quiz_value} from "./lesson_console_log_quiz_value.mjs";
export function lesson_equal_not_string() {
    const description = 'not equal ( !== ) ( strings )';
    const example_message = 'outputting whether or not two strings are not equal';
    return lesson_simple(source_get, example_before, description, example_message, []);
    function source_get() {
        let a = lesson_console_log_quiz_value();
        let b;
        if (random_50_50()) {
            b = a;
        } else {
            b = lesson_console_log_quiz_value();
        }
        return `console.log(${a} !== ${b});`;
    }
    function example_before(parent) {
        html_style_alternate(parent, html_p, [html_style_monospace, noop], ['!==', ' also checks whether or not two strings are not equal']);
    }
}
