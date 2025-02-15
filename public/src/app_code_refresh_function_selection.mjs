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
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export function app_code_refresh_function_selection(args) {
  let data = app_code_refresh_function_data_get(args);
  let selected = app_code_refresh_function_selected_get(data);
  let values = list_map(map_properties(selected), function (p) {
    let m = map_get(selected, p);
    let visitor2 = object_property_get(m, "visitor");
    let stack2 = object_property_get(visitor2, "stack");
    return stack2;
  });
  let result = {};
  if (list_empty_not_is(values)) {
    let ancestor_common = list_last_match(values);
    object_merge_strict(result, {
      ancestor_common,
    });
    if (list_is(ancestor_common)) {
      if (list_size_2(values)) {
        let two = list_map(values, function (v) {
          let index = list_index(v, ancestor_common);
          let index_next = index + 1;
          let next = list_get(v, index_next);
          return next;
        });
        object_merge_strict(result, {
          two,
        });
      } else if (list_size_1(values)) {
      }
    }
  }
  return result;
}
