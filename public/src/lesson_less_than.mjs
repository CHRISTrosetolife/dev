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
import { integer_random } from "./integer_random.mjs";
import { equal } from "./equal.mjs";
import { html_ul } from "./html_ul.mjs";
import { html_li_text } from "./html_li_text.mjs";
export function lesson_less_than() {
    const description = 'less than ( < )';
    const example_message = 'outputting whether or not a number is less than another number';
    return lesson_simple(source_get, example_before, description, example_message, 
        [screen_before1,screen_before2,screen_before3]);
    function screen_before1(parent) {
        html_p_text(parent, 
            'if "a" and "b" are numbers , then either "a" is less than "b" or "a" is not less than "b"');
        html_p_text(parent, 'we can write "a" is less than "b" as : a < b');
        html_p_text(parent, 'either a < b is true or a < b is false');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent)
        html_li_text(parent, '1 < 2 is true');
        html_li_text(parent, '3 < 5 is true');
        html_li_text(parent, '6 < 4 is false');
        html_li_text(parent, '12 < 0 is false');
        html_li_text(parent, '-11 < 0 is true');
        html_li_text(parent, '-10 < -7 is true');
        html_li_text(parent, '-8 < -9 is false');
    }
    function screen_before2(parent) {
        html_p_text(parent, 
            'if "a" and "b" are equal to each other , then "a" is not less than "b"');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent)
        html_li_text(ul, '8 < 8 is false');
        html_li_text(ul, '0 < 0 is false');
        html_li_text(ul, '-2 < -2 is false');
    }
    function screen_before3(parent) {
        html_style_alternate(parent, html_p, [noop, html_style_monospace], 
            ['in javascript , to check if a number is less than another number or not , use the less than ( ', '<', ' ) sign']);
        html_style_alternate(parent, html_p, [noop, html_style_monospace], 
            ['just as javascript has strings and numbers , javascript also has ', 'true', ' and ', 'false']);
        html_style_alternate(parent, html_p, [html_style_monospace, noop], 
            ['1', ' , ', '2', ' and ', '3', ' are numbers']);
        html_style_alternate(parent, html_p, [html_style_monospace, noop], 
            ['\'JESUS\'', ' , ', '\'is\'', ' and ', '\'LORD\'', ' are strings']);
        html_style_alternate(parent, html_p, [html_style_monospace, noop, html_style_monospace, noop, html_style_bold], 
            [ 'true', ' and ', 'false', ' are ','boolean']);
    }
    function example_before(parent) {
    }
    function source_get() {
        let a = integer_random_digit_single_positive();
        let b;
        if (equal(integer_random(1, 3), 1)) {
            b = a;
        } else {
            b = integer_random_digit_single_positive();
        }
        return `console.log(${a} < ${b});`
    }
}
