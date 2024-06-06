import { string_index_last } from "./string_index_last.mjs";
import { string_take } from "./string_take.mjs";
export function string_take_less_1(t) {
  return string_take(t, string_index_last(t));
}
