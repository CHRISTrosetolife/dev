import { noop } from "./noop.mjs";
import { identity } from "./identity.mjs";
import { match_choice } from "./match_choice.mjs";
export function match_optional(newLocal) {
  return match_choice([newLocal, identity], noop);
}
