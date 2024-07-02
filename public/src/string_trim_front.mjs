import { string_skip_1 } from "./string_skip_1.mjs";
import { string_starts_with_multiple } from "./string_starts_with_multiple.mjs";
import { list_to } from "./list_to.mjs";
export function string_trim_front(symbols, t) {
  symbols = list_to(symbols);
  while (string_starts_with_multiple(t, symbols)) {
    t = string_skip_1(t);
  }
  return t;
}
