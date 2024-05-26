import {equal_json} from "./equal_json.mjs";
import {assert_boolean} from "./assert_boolean.mjs";
import {app_ceb_answer_partial} from "./app_ceb_answer_partial.mjs";
export function app_ceb_answer_partial_test_4() {
    let result = app_ceb_answer_partial('from', 1, 3);
    assert_boolean(equal_json(result, "fro"));
}
