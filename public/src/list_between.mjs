import { list_insert } from "./list_insert.mjs";
import { each_index_reverse } from "./each_index_reverse.mjs";
export function list_between(list, b) {
  each_index_reverse(list, (item, index) => {
    list_insert(list, index, b);
  });
}
