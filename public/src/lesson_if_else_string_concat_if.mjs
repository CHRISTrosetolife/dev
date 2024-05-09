import {lesson_if_else_string_concat_variables_quiz} from "./lesson_if_else_string_concat_variables_quiz.mjs";
import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {html_p_text} from "./html_p_text.mjs";
import { js_code_let } from "./js_code_let.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { app_learn_code_log_delimit } from "./app_learn_code_log_delimit.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { list_join } from "./list_join.mjs";
export function lesson_if_else_string_concat_if() {
    let description = 'string combined with two variables';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let n = integer_random_digit_single();
        let lines = [
            js_code_statement_let_assign('before', string_delimit('number is')), 
            js_code_statement_let_assign('middle', string_delimit(' ')),
            js_code_statement_let_assign('after', string_delimit('negative')),
            `if (${n} >= 0) {`,
            js_code_statement_assign('middle', ' not '),
            `}`,
            app_learn_code_log(list_join(['before', 'middle', 'after'], ' + '))
        ]
        return list_join_newline(lines)
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {
        html_style_alternate_monospace_short(parent, 'strings can be concatentated with multiple variables');
    }
    function screen1(parent) {
        html_p_text(parent, 'in this lesson variable names will be declared in alphabetical order');
        html_p_text(parent, 'for example , this is allowed :');
        app_learn_code_code_part_contrast(parent, list_join_newline(['let a;', 'let b;']));
        html_p_text(parent, 'however , this is not allowed :');
        app_learn_code_code_part_contrast(parent, list_join_newline(['let b;', 'let a;']));
    }
}
