import { object_property_get } from "./object_property_get.mjs";
import { list_filter_index } from "./list_filter_index.mjs";
export function list_filter_property_index(
  verses,
  property_name,
  target_value,
) {
  return list_filter_index(verses, (verse) => {
    let value = object_property_get(verse, property_name);
    if (value === target_value) {
      return true;
    }
    return false;
  });
}
