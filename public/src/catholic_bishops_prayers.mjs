import { storage_local_get } from "./storage_local_get.mjs";
import { prayers_list_generic_10 } from "./prayers_list_generic_10.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { identity } from "./identity.mjs";
export function catholic_bishops_prayers(fn, names) {
  let m = list_map(names, function (n) {
    let v4 = string_combine_multiple([
      storage_local_get(fn, "name_each_before"),
      " ",
      n,
    ]);
    return v4;
  });
  let on_first = identity;
  function on_last(item) {
    let v2 =
      " and their families, friends, fans and the same for any successors and offspring; Lead them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, race, and men and women regarding marriage and ministry";
    let v3 = string_combine_multiple([item, v2]);
    return v3;
  }
  let v = prayers_list_generic_10(m, on_first, on_last);
  return v;
}
