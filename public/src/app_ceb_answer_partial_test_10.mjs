import {equal_json} from "./equal_json.mjs";
import {assert_boolean} from "./assert_boolean.mjs";
import {app_ceb_answer_partial} from "./app_ceb_answer_partial.mjs";
export function app_ceb_answer_partial_test_10() {
    let result = app_ceb_answer_partial('from', 3, 1);
    assert_boolean(equal_json(result, "fro"));
}
