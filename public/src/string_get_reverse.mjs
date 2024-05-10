import { string_index_last } from "./string_index_last.mjs";
export function string_get_reverse(input, index) {
  let last = string_index_last(input);
  return input[last - index];
}
