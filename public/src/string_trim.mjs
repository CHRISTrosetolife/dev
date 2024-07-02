import { string_trim_front } from "./string_trim_front.mjs";
import { list_to } from "./list_to.mjs";
import { string_take_less_1 } from "./string_take_less_1.mjs";
import { string_ends_with_multiple } from "./string_ends_with_multiple.mjs";
export function string_trim(t, symbols) {
  t = string_trim_front(t, symbols);
  symbols = list_to(symbols);
  while (string_ends_with_multiple(t, symbols)) {
    t = string_take_less_1(t);
  }
  return t;
}
