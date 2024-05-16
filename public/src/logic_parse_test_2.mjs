import {equal_json} from "./equal_json.mjs";
import {assert_boolean} from "./assert_boolean.mjs";
import {logic_parse} from "./logic_parse.mjs";
export function logic_parse_test_2() {
    let result = logic_parse('a(b())');
    assert_boolean(equal_json(result, {
        "type": "function",
        "name": "a",
        "args": [{
            "type": "function",
            "name": "b",
            "args": []
        }]
    }));
}
