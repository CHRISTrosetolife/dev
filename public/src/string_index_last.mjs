import { string_size } from "./string_size.mjs";
export function string_index_last(input) {
  let length = string_size(input);
  let index_last = length - 1;
  return index_last;
}
