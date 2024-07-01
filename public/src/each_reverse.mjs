import { each_index_reverse } from "./each_index_reverse.mjs";
export function each_reverse(list, lambda) {
  each_index_reverse(list, (item, index) => lambda(item));
}
