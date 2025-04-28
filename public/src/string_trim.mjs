import { string_trim_end } from "./string_trim_end.mjs";
import { string_trim_front } from "./string_trim_front.mjs";
export function string_trim(t, symbols) {
  t = string_trim_front(t, symbols);
  t = string_trim_end(t, symbols);
  return t;
}
