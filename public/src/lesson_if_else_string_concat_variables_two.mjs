import {app_learn_code_random_identifiers} from "./app_learn_code_random_identifiers.mjs";
import {list_indices} from "./list_indices.mjs";
import {list_join} from "./list_join.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {lesson_if_else_string_concat_quiz_parts} from "./lesson_if_else_string_concat_quiz_parts.mjs";
import {html_style_alternate_monospace_short} from "./html_style_alternate_monospace_short.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {list_get} from "./list_get.mjs";
import {list_set} from "./list_set.mjs";
import {add_1} from "./add_1.mjs";
import {list_scramble} from "./list_scramble.mjs";
import {list_take} from "./list_take.mjs";
import {list_add} from "./list_add.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import {identity} from "./identity.mjs";
export function lesson_if_else_string_concat_variables_two() {
    let description = 'string combined with two variables';
    let example_message = string_combine('with ', description);
    return lesson_simple(function () {
        let variable_count = 2;
        let parts = lesson_if_else_string_concat_quiz_parts(add_1(variable_count));
        let indices = list_indices(parts);
        list_scramble(indices);
        let taken = list_take(indices, variable_count);
        let taken_names = app_learn_code_random_identifiers(variable_count);
        list_sort_string(taken_names, identity);
        let lines = [];
        for (let t of taken) {
            let parts_at_variable_index = list_get(parts, t);
            let name = app_learn_code_random_identifiers(variable_count);
            list_set(parts, t, name);
            list_add(lines, js_code_statement_let_assign(name, parts_at_variable_index));
        }
        list_add(lines, app_learn_code_log(list_join(parts, ' + ')));
        return list_join_newline(lines);
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_style_alternate_monospace_short(parent, 'strings can be concatentated with a variable');
    }
}
