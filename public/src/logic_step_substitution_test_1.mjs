import {equal_json} from "./equal_json.mjs";
import {assert_boolean} from "./assert_boolean.mjs";
import {logic_unparse} from "./logic_unparse.mjs";
import {logic_parse} from "./logic_parse.mjs";
import {logic_step_substitution} from "./logic_step_substitution.mjs";
export function logic_step_substitution_test_1() {
    let result = logic_step_substitution(logic_parse('all(x,equal(x,x))'), logic_parse('zero'));
    result = logic_unparse(result);
    assert_boolean(equal_json(result, "equal(zero,zero)"));
}
