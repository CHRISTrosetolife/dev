import { list_remove_multiple_from } from "./list_remove_multiple_from.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_index } from "./list_index.mjs";
import { list_map } from "./list_map.mjs";
import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_refresh_function_selection_remove(result) {
  let two = object_property_get(result, "two");
  let ancestor_common = object_property_get(result, "ancestor_common");
  assert(list_is, [ancestor_common]);
  let indices = list_map(two, function (t) {
    let v = list_index(ancestor_common, t);
    return v;
  });
  list_sort(indices);
  let low = list_first(indices);
  let high = list_second(indices);
  let removed = list_slice(ancestor_common, low, high + 1);
  list_remove_multiple_from(ancestor_common, low, high);
  let v2 = removed;
  return v2;
}
