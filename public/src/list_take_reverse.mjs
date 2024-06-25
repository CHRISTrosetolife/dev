import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
export function list_take_reverse(input, count) {
  return list_skip(input, list_size(input) - count);
}
