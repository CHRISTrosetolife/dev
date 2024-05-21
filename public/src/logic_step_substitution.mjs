import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function logic_step_substitution(statement, substitution) {
  let { type } = statement;
  assert(equal, [type, "call"]);
}
