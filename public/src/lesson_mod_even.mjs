import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
export function lesson_mod_even() {
    let description = 'checking if a number is even';
    let example_message = 'outputting whether or not a number is even';
    return lesson_simple(function () {
        let a = integer_random_digit_single_positive();
        let lines = [(js_code_statement_let_assign('is_even', a))`if (is_even) {`, app_learn_code_log('number is even'), `} else {`, app_learn_code_log('number is odd'), `}`];
        return list_join_newline(lines);
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {}
    function screen1(parent) {
        html_style_alternate_monospace_short(parent, 'suppose `n` is a number in javascipt');
        html_style_alternate_monospace_short(parent, 'if `n % 2` is `0` , then `n` is an even number');
        html_style_alternate_monospace_short(parent, 'if `n % 2 === 0` is `true` , then `n` is an even number');
        html_style_alternate_monospace_short(parent, 'otherwise , `n` is an odd number');
    }
}
