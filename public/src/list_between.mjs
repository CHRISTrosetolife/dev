import { each_index_only_reverse } from "./each_index_only_reverse.mjs";
import { list_insert } from "./list_insert.mjs";
export function list_between(list, item) {
  each_index_only_reverse(list, (index) => {
    if (index === 0) {
      return;
    }
    list_insert(list, index, item);
  });
  return list;
}
