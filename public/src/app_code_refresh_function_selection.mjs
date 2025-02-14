import { list_get } from "./list_get.mjs";
import { list_index } from "./list_index.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_is } from "./list_is.mjs";
import { list_last_match } from "./list_last_match.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { map_get } from "./map_get.mjs";
import { map_properties } from "./map_properties.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_refresh_function_selected_get } from "./app_code_refresh_function_selected_get.mjs";
import { app_code_refresh_function_data_get } from "./app_code_refresh_function_data_get.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
export function app_code_refresh_function_selection(args, on_element) {
  let data = app_code_refresh_function_data_get(args);
  let selected = app_code_refresh_function_selected_get(data);
  let values = list_map(map_properties(selected), function (p) {
    let m = map_get(selected, p);
    let visitor2 = object_property_get(m, "visitor");
    let stack2 = object_property_get(visitor2, "stack");
    return stack2;
  });
  let result = {};
  let last_matching_item = list_last_match(values);
  if (list_is(last_matching_item)) {
    if (list_size_2(values)) {
      let two = list_map(values, function (v) {
        let index = list_index(v, last_matching_item);
        let index_next = index + 1;
        let next = list_get(v, index_next);
        let v2 = next;
        return v2;
      });
      object_merge_strict(result, {
        two,
      });
    }
  }
  let v3 = result;
  return v3;
}
