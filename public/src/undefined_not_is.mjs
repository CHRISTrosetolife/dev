import { undefined_is } from "./undefined_is.mjs";
export function undefined_not_is(previous_token) {
  return !undefined_is(previous_token);
}
