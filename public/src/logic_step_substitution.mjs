import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_length } from "./list_length.mjs";
export function logic_step_substitution(statement, substitution) {
  let { type, args } = statement;
  assert(equal, [type, "call"]);
  let {
    callee: { type: callee_type, name },
  } = statement;
  assert(equal, [callee_type, "identifier"]);
  assert(equal, [name, "all"]);
  assert(equal, [list_length(args), 2]);
  let [variable] = args;
}
