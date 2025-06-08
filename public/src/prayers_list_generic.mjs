import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function prayers_list_generic(list, count, on_first, on_last) {
  let ps = list_map_index(list, function (item, index) {
    let m = index % count;
    let first_is = m === 0;
    let last_is = m === count - 1 || list_index_last_is(list, index);
    if (last_is && first_is) {
      item = on_first(item);
    }
    if (last_is) {
      item = string_number_colon_generic(on_last(item), index, ";");
    } else if (first_is) {
      item = string_number_colon(on_first(item), index);
    } else {
      item = string_number_colon(item, index);
    }
    return item;
  });
  return ps;
  function string_number_colon(item, index) {
    let ending = ",";
    let v3 = string_number_colon_generic(item, index, ending);
    return v3;
  }
  function string_number_colon_generic(item, index, ending) {
    let index_1 = index + 1;
    let index_1_colon = string_combine_multiple([index_1, ": "]);
    let v2 = string_combine_multiple([index_1_colon, item, ending, " "]);
    return v2;
  }
}
