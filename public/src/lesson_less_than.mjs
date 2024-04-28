import {newline} from "./newline.mjs";
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
export function lesson_less_than() {
    const example_message = 'less than ( < )';
    const description = 'outputting whether or not a number is less than another number';
    return lesson_simple(source_get, example_before, description, example_message, []);
    function example_before(parent) {
        html_p_text(parent, 'some questions can be answered using a "yes" or a "no"');
        html_p_text(parent, 'for example if someone asked "is the number two bigger than the number one ?" then the answer is "yes"');
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript the code for "yes" is ', 'true']);
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript the code for "no" is ', 'false']);
    }
    function source_get() {
        let answers = [true, false];
        list_add(answers, random_50_50());
        list_scramble(answers);
        let mapped = list_map(answers, a => `console.log(${a});`);
        return list_join(mapped, newline());
    }
}
