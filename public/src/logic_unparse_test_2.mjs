import { equal_json } from "./equal_json.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { logic_parse } from "./logic_parse.mjs";
import { logic_unparse } from "./logic_unparse.mjs";
export function logic_unparse_test_2() {
  let result = logic_unparse(logic_parse("a(b())"));
  assert_boolean(equal_json(result, "a(b())"));
}
