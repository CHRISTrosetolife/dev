import {app_learn_code_unscramble} from "./app_learn_code_unscramble.mjs";
import {app_learn_code_quiz} from "./app_learn_code_quiz.mjs";
import {lesson_log_number_example} from "./lesson_log_number_example.mjs";
import {list_add} from "./list_add.mjs";
import {array_new} from "./array_new.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {object_new} from "./object_new.mjs";
export function lesson_simple(source_get, example_before, description, example_message) {
    let v1 = object_new();
    object_property_set(v1, 'description', description);
    let v2 = array_new();
    list_add(v2, lesson_log_number_example(source_get, example_message, example_before));
    list_add(v2, app_learn_code_quiz(source_get));
    list_add(v2, app_learn_code_unscramble(source_get));
    object_property_set(v1, 'screens', v2);
    return v1;
}
