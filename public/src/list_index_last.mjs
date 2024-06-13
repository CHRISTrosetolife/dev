import { list_size } from "./list_size.mjs";
export function list_index_last(input) {
  let length = list_size(input);
  let index_last = length - 1;
  return index_last;
}
