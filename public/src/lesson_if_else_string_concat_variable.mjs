import {list_join} from "./list_join.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {lesson_if_else_string_concat_quiz_parts} from "./lesson_if_else_string_concat_quiz_parts.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {string_combine} from "./string_combine.mjs";
import { list_random_index } from "./list_random_index.mjs";
export function lesson_if_else_string_concat_variable() {
    let description = 'string combined a variable';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let parts = lesson_if_else_string_concat_quiz_parts(2);
        let parts_variable_index = list_random_index(parts)
        return app_learn_code_log(list_join(parts, ' + '));
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_style_alternate_monospace_short(parent, 'strings can be concatentated with a variable');
    }
}
