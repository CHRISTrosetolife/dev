import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function lesson_if_else_nested_if() {
    let description = 'nested if';
    let example_message = 'outputting whether or not a number is even';
    return lesson_simple(function () {
        let a = integer_random_digit_single_positive();
        let lines = [
        js_code_statement_let_assign('is_positive', `${a} > 0`),
        js_code_statement_let_assign('is_even', `${a} % 2 === 0`),
        app_learn_code_log(a), 
        `if (is_positive) {`,
            app_learn_code_log_delimit(`number is positive`), 
            `if (is_even) {`, 
                app_learn_code_log_delimit('number is even'), 
            `}`,
        `}`];
        return list_join_newline(lines);
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {
        'an `if` can be inside another `if`'
        'then there '
    }
    function screen1(parent) {
        html_style_alternate_monospace_short(parent, 'suppose `n` is a number in javascipt');
        html_style_alternate_monospace_short(parent, 'if `n % 2` is `0` , then `n` is an even number');
        html_style_alternate_monospace_short(parent, 'if `n % 2 === 0` is `true` , then `n` is an even number');
        html_style_alternate_monospace_short(parent, 'otherwise , `n` is an odd number');
    }
}
