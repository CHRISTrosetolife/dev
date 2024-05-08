import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_if_else_nested_if() {
    let description = 'nested if';
    let example_message = string_combine('with a ', description);
    return lesson_simple(function () {
        let a = integer_random_digit_single();
        let lines = [js_code_statement_let_assign('is_positive', `${a} > 0`), js_code_statement_let_assign('is_even', `${a} % 2 === 0`), app_learn_code_log(a), `if (is_positive) {`, app_learn_code_log_delimit(`number is positive`), `if (is_even) {`, app_learn_code_log_delimit('number is positive and even'), `}`, `}`];
        return list_join_newline(lines);
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_style_alternate_monospace_short(parent, 'an `if` can be inside another `if`');
        html_style_alternate_monospace_short(parent, 'this is called a nested `if`')
    }
}
