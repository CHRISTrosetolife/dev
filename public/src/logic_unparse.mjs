import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_is } from "./string_is.mjs";
export function logic_unparse(parse) {
  let { type } = parse;
  if (equal(type, "identifier")) {
    let { name } = parse;
    assert(string_is(name));
    return name;
  }
  assert(equal(type, "call"));
  let { callee, args } = parse;
  let mapped = list_map(args, logic_unparse);
  return string_combine_multiple([
    logic_unparse(callee),
    "(",
    list_join(args, ","),
    ")",
  ]);
}
