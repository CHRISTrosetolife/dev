import {equal_json} from "./equal_json.mjs";
import {assert_boolean} from "./assert_boolean.mjs";
import {app_ceb_alternatives_partial_matches_nexts} from "./app_ceb_alternatives_partial_matches_nexts.mjs";
export function app_ceb_alternatives_partial_matches_nexts_test_3() {
    let result = app_ceb_alternatives_partial_matches_nexts('from', 1, 2, ['fur', 'form', 'front', 'at', 'fromi']);
    assert_boolean(equal_json(result, []));
}
