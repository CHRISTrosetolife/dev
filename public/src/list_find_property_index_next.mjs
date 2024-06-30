import { add_1 } from "./add_1.mjs";
import { list_find_property_index } from "./list_find_property_index.mjs";
export function list_find_property_index_next(
  verses,
  property_name,
  target_value,
) {
  let index = list_find_property_index(verses, property_name, target_value);
  let next = add_1(index);
  return {
    next,
    index,
  };
}
