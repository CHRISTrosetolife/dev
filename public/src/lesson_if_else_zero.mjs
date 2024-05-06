import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
export function lesson_if_else_zero() {
    let description = 'if with else about zero or not';
    let example_message = 'outputting whether or not a number is zero';
    return lesson_simple(function () {
        let a;
        if (random_50_50()) {
            a = 0;
        } else {
            a = integer_random_digit_single();
        }
        let lines = [`if (${a} === 0) {`, app_learn_code_log_delimit('number is zero'), `} else {`, app_learn_code_log_delimit('number is not zero'), `}`];
        return list_join_newline(lines);
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_style_alternate_monospace(parent, ['', 'if', ' and ', 'else', ' can be used to output whether or not a number is ', '0']);
    }
}
