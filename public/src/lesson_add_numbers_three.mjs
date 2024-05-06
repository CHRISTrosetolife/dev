import {call_multiple} from "./call_multiple.mjs";
import {app_learn_code_log_add_3} from "./app_learn_code_log_add_3.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
export function lesson_add_numbers_three() {
    let example_message = 'adding three numbers';
    let description = example_message;
    return lesson_simple(function () {
        let [a, b, c] = call_multiple(integer_random_digit_single_positive, 3);
        return app_learn_code_log_add_3(a, b, c);
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_p_text(parent, 'more than two numbers can be added together at once');
    }
}
