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
export function lesson_greater_than() {
    const description = 'greater than ( > )';
    const example_message = 'outputting whether or not a number is greater than another number';
    return lesson_simple(lesson_comparisons_source_get_get('>'), example_before, description, example_message, [screen_before1, screen_before2, screen_before3]);
    function screen_before1(parent) {
        html_style_alternate(parent, html_p, [noop, html_style_bold], ['if "a" and "b" are numbers and "a" is less than "b" then "b" is ', 'greater than', ' "a"']);
        html_p_text(parent, 'like less than , if "a" and "b" are equal to each other , then "a" is not greater than "b"');
        html_p_text(parent, 'we can write "a" is greater than "b" as : a > b');
        html_p_text(parent, 'here are some examples :');
        let ul = html_ul(parent);
        html_li_text(ul, '6 > 4 is true');
        html_li_text(ul, '3 > 5 is false');
        html_li_text(ul, '2 > 2 is false');
    }
    function example_before(parent) {}
}
