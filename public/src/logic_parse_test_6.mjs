import {equal_json} from "./equal_json.mjs";
import {assert_boolean} from "./assert_boolean.mjs";
import {logic_parse} from "./logic_parse.mjs";
export function logic_parse_test_6() {
    let result = logic_parse('a(b(),c(d(),e()))');
    assert_boolean(equal_json(result, {
        "name": "a",
        "type": "function",
        "args": [{
            "name": "b",
            "type": "function",
            "args": []
        }, {
            "name": "c",
            "type": "function",
            "args": [{
                "name": "d",
                "type": "function",
                "args": []
            }, {
                "name": "e",
                "type": "function",
                "args": []
            }]
        }]
    }));
}
