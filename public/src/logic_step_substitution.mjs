import { logic_copy } from "./logic_copy.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_length } from "./list_length.mjs";
import { string_is } from "./string_is.mjs";
import { visit } from "./visit.mjs";
import { list_concat } from "./list_concat.mjs";
export function logic_step_substitution(statement, substitution) {
  let copy = logic_copy(statement);
  let {
    type,
    callee: { type: callee_type, name },
    args: [variable, inner],
  } = copy;
  assert(equal, [type, "call"]);
  assert(equal, [callee_type, "identifier"]);
  assert(equal, [name, "all"]);
  assert(equal, [list_length(args), 2]);
  let { type: variable_type, name: variable_name } = variable;
  assert(equal, [variable_type, "identifier"]);
  assert(string_is, [variable_name]);
  visit(
    copy,
    (node) => {
      let { type, callee, args } = node;
      if (equal(type, "call")) {
        return list_concat([callee], args);
      }
      return [];
    },
    () => true,
    (v) => {},
    [],
  );
}
