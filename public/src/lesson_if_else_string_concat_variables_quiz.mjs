import {app_learn_code_log_join_plus} from "./app_learn_code_log_join_plus.mjs";
import {list_join_newline} from "./list_join_newline.mjs";
import {list_add} from "./list_add.mjs";
import {list_set} from "./list_set.mjs";
import {list_get} from "./list_get.mjs";
import {each_index} from "./each_index.mjs";
import {identity} from "./identity.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import {app_learn_code_random_identifiers} from "./app_learn_code_random_identifiers.mjs";
import {list_take} from "./list_take.mjs";
import {list_scramble} from "./list_scramble.mjs";
import {list_indices} from "./list_indices.mjs";
import {add_1} from "./add_1.mjs";
import {lesson_if_else_string_concat_quiz_parts} from "./lesson_if_else_string_concat_quiz_parts.mjs";
import {js_code_statement_let_assign_multiple} from "./js_code_statement_let_assign_multiple.mjs";
export function lesson_if_else_string_concat_variables_quiz(variable_count) {
    let parts = lesson_if_else_string_concat_quiz_parts(add_1(variable_count));
    let indices = list_indices(parts);
    list_scramble(indices);
    let taken = list_take(indices, variable_count);
    let taken_names = app_learn_code_random_identifiers(variable_count);
    list_sort_string(taken_names, identity);
    let values = [];
    each_index(taken, (t, index) => {
        let parts_at_variable_index = list_get(parts, t);
        let name = list_get(taken_names, index);
        list_set(parts, t, name);
        list_add(values, parts_at_variable_index);
    });
    let lines = [];
    list_add(lines, js_code_statement_let_assign_multiple(taken_names, values));
    list_add(lines, app_learn_code_log_join_plus(parts));
    return list_join_newline(lines);
}
