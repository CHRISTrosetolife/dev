import { string_starts_with } from "./string_starts_with.mjs";
import { list_any } from "./list_any.mjs";
export function string_starts_with_multiple(input, prefixes) {
  list_any(prefixes, (prefix) => string_starts_with(input, prefix));
}
