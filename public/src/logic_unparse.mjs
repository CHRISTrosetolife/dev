import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { string_is } from "./string_is.mjs";
export function logic_unparse(parse) {
  let { type } = parse;
  if (equal(type, "identifier")) {
    let { name } = parse;
    assert(string_is(name));
    return name;
  }
  assert(equal(type, "call"));
  let { callee } = parse;
  return logic_unparse(callee);
}
