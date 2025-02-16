import { undefined_is } from "./undefined_is.mjs";
import { null_is } from "./null_is.mjs";
export function null_or_undefined(candidate) {
  let v = null_is(candidate) || undefined_is(candidate);
  return v;
}
