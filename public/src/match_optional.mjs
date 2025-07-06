import { assert_not } from "./assert_not.mjs";
import { identity } from "./identity.mjs";
import { match_choice } from "./match_choice.mjs";
import { list_is } from "./list_is.mjs";
export function match_optional(input) {
  assert_not(list_is, [input]);
  let v = match_choice([input, identity]);
  return v;
}
