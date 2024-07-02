import { list_size } from "./list_size.mjs";
export function list_index_last(list) {
  let length = list_size(list);
  let index_last = length - 1;
  return index_last;
}
