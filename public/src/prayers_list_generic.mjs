import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function prayers_list_generic(list, count, on_first, on_last) {
  let ending_regular = ",";
  let ps = list_map_index(list, function (item, index) {
    let m = index % count;
    let first_is = m === 0;
    let last_is = m === count - 1 || list_index_last_is(list, index);
    let ending;
    if (last_is) {
      ending = ";";
    } else {
      ending = ending_regular;
    }
    if (first_is) {
      item = on_first(item);
    } else if (last_is) {
      item = on_last(item);
    }
    item = string_number_colon_generic(item, index, ending);
    return item;
  });
  return ps;
  function string_number_colon(item, index) {
    let v3 = string_number_colon_generic(item, index, ending_regular);
    return v3;
  }
  function string_number_colon_generic(item, index, ending) {
    let index_1 = index + 1;
    let index_1_colon = string_combine_multiple([index_1, ": "]);
    let v2 = string_combine_multiple([index_1_colon, item, ending, " "]);
    return v2;
  }
}
