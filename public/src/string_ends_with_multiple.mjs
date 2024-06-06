import { string_ends_with } from "./string_ends_with.mjs";
import { list_any } from "./list_any.mjs";
export function string_ends_with_multiple(input, suffixes) {
  list_any(suffixes, (suffix) => string_ends_with(input, suffix));
}
