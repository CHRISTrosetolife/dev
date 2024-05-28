import { string_starts_with } from "./string_starts_with.mjs";
import { string_is } from "./string_is.mjs";
export function string_is_starts_with(literal, prefix) {
  return string_is(literal) && string_starts_with(literal, prefix);
}
