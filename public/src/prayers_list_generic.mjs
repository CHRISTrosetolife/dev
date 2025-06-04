import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function prayers_list_generic(list, on_first, on_last) {
  let ps = list_map_index(list, function (item, index) {
    let count = 10;
    let m = index % count;
    let v;
    if (m === 0) {
      v = string_number_colon(on_first(item), index);
    } else if (m === count - 1 || list_index_last_is(list, index)) {
      v = string_number_colon_generic(on_last(item), index, ";");
    } else {
      v = string_number_colon(item, index);
    }
    return v;
  });
  return ps;
  function string_number_colon(item, index) {
    let ending = ",";
    let v3 = string_number_colon_generic(index, item, ending);
    return v3;
  }
  function string_number_colon_generic(index, item, ending) {
    let index_1 = index + 1;
    let index_1_colon = string_combine_multiple([index_1, ": "]);
    let v2 = string_combine_multiple([index_1_colon, item, ending, " "]);
    return v2;
  }
}
