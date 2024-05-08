import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {html_hr} from "./html_hr.mjs";
export function lesson_if_else_if() {
    let description = '`if` with `else if`';
    let example_message = 'outputting whether or not a number is positive , negative or zero';
    return lesson_simple(function () {
        let a;
        if (random_50_50()) {
            a = 0;
        } else {
            a = integer_random_digit_single();
        }
        let lines = [js_code_statement_let_assign('n', a), `if (n > 0) {`, app_learn_code_log_delimit('number is positive'), `} else if (n < 0) {`, app_learn_code_log_delimit('number is negative'), `} else {`, app_learn_code_log_delimit('number is zero'), `}`];
        return list_join_newline(lines);
    }, example_before, description, example_message, [screen1, screen2]);
    function example_before(parent) {
        html_p_text(parent, 'in this lesson , the code will first check whether or not the number is positive');
        html_p_text(parent, 'if the number is not positive , then the code will check whether or not the number is negative');
        html_hr(parent);
    }
    function screen1(parent) {
        html_p_text(parent, 'the number zero is not positive');
        html_p_text(parent, 'the number zero is not negative');
        html_p_text(parent, 'if a number is not positive and the number is not negative , then the number must be zero');
        html_p_text(parent, 'a number is either positive , negative or zero');
    }
    function screen2(parent) {
        html_p_text(parent, 'a number is either positive , or is it not positive , so "positive" and "not positive" are two choices');
        html_style_alternate_monospace(parent, ['if there are two choices , then one ', 'if', ' ', 'else', ' can be used']);
        html_p_text(parent, 'this lesson will check a number to be either "positive" , "negative" or "zero"');
        html_p_text(parent, '"positive" , "negative" and "zero" are three choices');
        html_style_alternate_monospace(parent, ['if there are three choices , then two ', 'if', ' ', 'else', ' can be used , as will be shown later in this lesson']);
    }
}
