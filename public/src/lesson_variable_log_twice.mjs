import {app_learn_code_code} from "./app_learn_code_code.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {lesson_statements_two_quiz} from "./lesson_statements_two_quiz.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {lesson_variable_code_get} from "./lesson_variable_code_get.mjs";
import {app_learn_code_random_value} from "./app_learn_code_random_value.mjs";
import {app_learn_code_random_identifier} from "./app_learn_code_random_identifier.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
export function lesson_variable_log_twice() {
    let example_message = 'outputting a variable to the console twice';
    let description = example_message;
    return lesson_simple(function () {
        let name = app_learn_code_random_identifier();
        let value = app_learn_code_random_value();
        return `${lesson_variable_code_get(name, value)}
${app_learn_code_log(name)}`;
    }, example_before, description, example_message, [screen1]);
    function example_before(parent) {}
    function screen1(parent) {
        html_style_alternate_monospace(parent, ['remember , here is code that outputs twice because there are two ', 'console.log', ' statements :']);
        app_learn_code_code(parent, lesson_statements_two_quiz());
    }
}
