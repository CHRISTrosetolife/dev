import { undefined_is } from "./undefined_is.mjs";
import { null_is } from "./null_is.mjs";
export function null_or_undefined(candidate) {
  return null_is(candidate) || undefined_is(candidate);
}
