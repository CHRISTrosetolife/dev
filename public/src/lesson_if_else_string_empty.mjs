import {lesson_if_else_string_concat_variables_quiz} from "./lesson_if_else_string_concat_variables_quiz.mjs";
import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {js_code_let} from "./js_code_let.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {string_delimit} from "./string_delimit.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {js_code_statement_assign} from "./js_code_statement_assign.mjs";
import {app_learn_code_log_delimit} from "./app_learn_code_log_delimit.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {list_join} from "./list_join.mjs";
export function lesson_if_else_string_empty() {
    let description = 'string concatentation with an `if';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let n = integer_random_digit_single();
        let lines = [js_code_statement_let_assign('before', string_delimit('')), app_learn_code_log(n), `if (${n} >= 0) {`, js_code_statement_assign('before', string_delimit('not ')), `}`, app_learn_code_log(list_join(['before', string_delimit('negative')], ' + '))];
        return list_join_newline(lines);
    }, example_before, description, example_message, []);
    function example_before(parent) {}
}
