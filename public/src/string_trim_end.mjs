import { string_take_less_1 } from "./string_take_less_1.mjs";
import { string_ends_with_multiple } from "./string_ends_with_multiple.mjs";
import { list_to } from "./list_to.mjs";
export function string_trim_end(t, symbols) {
  symbols = list_to(symbols);
  while (string_ends_with_multiple(t, symbols)) {
    t = string_take_less_1(t);
  }
  return t;
}
