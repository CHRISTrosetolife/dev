import { noop } from "./noop.mjs";
import { identity } from "./identity.mjs";
import { match_choice } from "./match_choice.mjs";
export function match_optional(input) {
  let v = match_choice([input, identity], noop);
  return v;
}
