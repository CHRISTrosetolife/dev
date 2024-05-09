import {lesson_if_else_string_concat_quiz_parts} from "./lesson_if_else_string_concat_quiz_parts.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {list_join} from "./list_join.mjs";
export function lesson_if_else_string_concat_quiz(concat_count) {
    let mapped = lesson_if_else_string_concat_quiz_parts(concat_count);
    return app_learn_code_log(list_join(mapped, ' + '));
}
