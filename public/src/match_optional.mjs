import { identity } from "./identity.mjs";
import { match_choice } from "./match_choice.mjs";
export function match_optional(input) {
  $asn;
  let v = match_choice([input, identity]);
  return v;
}
