import {a} from "./a.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {mod} from "./mod.mjs";
import {floor} from "./floor.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {html_style_alternate_bold} from "./html_style_alternate_bold.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {equal} from "./equal.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_hr} from "./html_hr.mjs";
import {range} from "./range.mjs";
import {string_combine} from "./string_combine.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_style_width_full} from "./html_style_width_full.mjs";
import {html_style_centered} from "./html_style_centered.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {list_index_last} from "./list_index_last.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import {each_index} from "./each_index.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
export function lesson_mod_even() {
    let description = 'checking if a number is even';
    let example_message = 'outputting whether or not a number is even';
    return lesson_simple(function () {
        let a = integer_random_digit_single_positive();
        let lines = [js_code_statement_let_assign('is_even', a) `if (is_even) {`, app_learn_code_log('number is even'), `} else {`, app_learn_code_log('number is odd'), `}`];
        return list_join_newline(lines);
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {
    }
    function screen1(parent) {
        html_style_alternate_monospace_short(parent, 'suppose `n` is a number in javascipt');
        html_style_alternate_monospace_short(parent, 'if `n % 2` is `0` , then `n` is an even number');
        html_style_alternate_monospace_short(parent, 'if `n % 2 === 0` is `true` , then `n` is an even number');
        html_style_alternate_monospace_short(parent, 'otherwise , `n` is an odd number');
    }
}
