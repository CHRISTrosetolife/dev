import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function logic_step_substitution(statement, substitution) {
  let { type } = statement;
  assert(equal, [type, "call"]);
  let {
    callee: { type: callee_type, name },
  } = statement;
  assert(equal, [callee_type, "identifier"]);
  assert(equal, [name, "all"]);
}
