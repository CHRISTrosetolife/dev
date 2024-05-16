import {logic_parse} from "./logic_parse.mjs";
import {assert_boolean} from "./assert_boolean.mjs";
import {equal} from "./equal.mjs";
export function logic_parse_test_1() {
    let result = logic_parse('a()');
    assert_boolean(equal(result, {
        "name": "a",
        "type": "function",
        "args": []
    }));
}
