import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_length } from "./list_length.mjs";
export function logic_step_substitution(statement, substitution) {
  let {
    type,
    callee: { type: callee_type, name },
    args: [variable, inner],
  } = statement;
  assert(equal, [type, "call"]);
  assert(equal, [callee_type, "identifier"]);
  assert(equal, [name, "all"]);
  assert(equal, [list_length(args), 2]);
}
