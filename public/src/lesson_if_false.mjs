import {list_join} from "./list_join.mjs";
import {app_learn_code_log_random_value} from "./app_learn_code_log_random_value.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {html_hr} from "./html_hr.mjs";
export function lesson_if_false() {
    let description = 'if with false';
    let example_message = 'with an if with false passed in';
    return lesson_simple(function () {
        let statements = [app_learn_code_log_random_value(), `if (false) {
${app_learn_code_log_random_value()}
}`, app_learn_code_log_random_value()];
        return list_join(statements, '\n');
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_style_alternate_monospace(parent, ['if there is an ', 'if', ' and what is in between the parentheses results in ', 'false', ' , the code in between the braces will not be ran']);
        html_hr(parent);
        html_style_alternate_monospace(parent, ['in the example below , ', 'false', ' is in between the parentheses of the ', 'if']);
        html_style_alternate_monospace(parent, ['therefore what is inside the braces of the ', 'if', ' is not ran']);
        html_style_alternate_monospace(parent, ['therefore the ', 'console.log();', ' statement inside the ', 'if', ' braces is not ran']);
        html_style_alternate_monospace(parent, ['therefore only ', 'console.log();', ' statements before and after the ', 'if', ' braces are ran']);
        html_hr(parent);
    }
}
