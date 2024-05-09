import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {html_hr} from "./html_hr.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_if_else_if_two() {
    let description = 'two `if`';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let a = integer_random_digit_single();
        let lines = [
        app_learn_code_log(a), 
        `if (${a} > 0) {`, 
        app_learn_code_log_delimit('positive'), 
        `}`,
        `if (${a} % 2 === 0) {`,
        app_learn_code_log_delimit('even'), 
        `}`
        ];
        return list_join_newline(lines);
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {

    }
    function screen1(parent) {
        html_p_text(parent, 'a program can have multiple `if`\'s');
        html_p_text(parent, 'in this lesson there will be two `if`\'s');
        html_p_text(parent, 'sometimes only the first `if` will run');
        html_p_text(parent, 'sometimes only the second `if` will run');
        html_p_text(parent, 'sometimes both `if`\'s will run');
        html_p_text(parent, 'sometimes none of the `if`\'s will run');
    }
}
