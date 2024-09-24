import { list_insert } from "./list_insert.mjs";
import { each_index_reverse } from "./each_index_reverse.mjs";
export function each_index_only_reverse(list, lambda) {
  each_index_reverse(list, (item, index) => {
    list_insert(list, index, b);
  });
}
