import {js_code_statement_let_assign_multiple} from "./js_code_statement_let_assign_multiple.mjs";
import {list_sort} from "./list_sort.mjs";
import {app_learn_code_log_add_3} from "./app_learn_code_log_add_3.mjs";
import {call_multiple} from "./call_multiple.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {identity} from "./identity.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import {html_ul} from "./html_ul.mjs";
import {string_combine} from "./string_combine.mjs";
import {app_learn_code_random_identifiers} from "./app_learn_code_random_identifiers.mjs";
export function lesson_variables_three() {
    let description = 'three variables';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let count = 3;
        let values = call_multiple(integer_random_digit_single_positive, count);
        list_sort(values, identity);
        let names = app_learn_code_random_identifiers(count);
        list_sort_string(names, identity);
        let [name_a, name_b, name_c] = names;
        return `${js_code_statement_let_assign_multiple(names, values)}
${app_learn_code_log_add_3(name_a, name_b, name_c)}`;
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {
        html_p_text(parent, 'a program can have more than two variables');
    }
    function screen1(parent) {
        html_p_text(parent, 'in this lesson :');
        let ul = html_ul(parent);
        html_li_text(ul, 'the declared variables will be ordered alphabetically');
        html_li_text(ul, 'the numbers will be assigned from smallest to largest');
    }
}
