import { never } from "./never.mjs";
import { assert } from "./assert.mjs";
import { identity } from "./identity.mjs";
import { match_choice } from "./match_choice.mjs";
export function match_optional(input) {
  assert(never, []);
  let v = match_choice([input, identity]);
  return v;
}
