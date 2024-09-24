import { each_index_only_reverse } from "./each_index_only_reverse.mjs";
import { list_insert } from "./list_insert.mjs";
export function list_between(list, b) {
  each_index_only_reverse(list, (index) => {
    list_insert(list, index, b);
  });
}
