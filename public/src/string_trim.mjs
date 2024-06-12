import { string_take_less_1 } from "./string_take_less_1.mjs";
import { string_ends_with_multiple } from "./string_ends_with_multiple.mjs";
import { string_skip_1 } from "./string_skip_1.mjs";
import { string_starts_with_multiple } from "./string_starts_with_multiple.mjs";
export function string_trim(t, symbols) {symbols=list_to(symbols);
  while (string_starts_with_multiple(t, symbols)) {
    t = string_skip_1(t);
  }
  while (string_ends_with_multiple( t, symbols)) {
    t = string_take_less_1(t);
  }
  return t;
}
