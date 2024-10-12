import { list_random_item } from "./list_random_item.mjs";
import { range_map_join_empty } from "./range_map_join_empty.mjs";
export function list_size_random(size, items) {
  return range_map_join_empty(size, () => {
    return list_random_item(items);
  });
}
