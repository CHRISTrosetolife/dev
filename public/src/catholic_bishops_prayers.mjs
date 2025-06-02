import { list_index_last_is } from "./list_index_last_is.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { mod } from "./mod.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
export function catholic_bishops_prayers() {
  let bishops = catholic_bishops();
  let on_first = prayers_sabbw;
  let last_after =
    "and their families, friends, fans and the same for any successors and offspring; Lead them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, race, and men and women regarding marriage and ministry;";
  let ps = list_map_index(bishops, function (b, index) {
    let count = 10;
    let mod = index % count;
    let v;
    let index_1 = index + 1;
    let index_1_colon = string_combine_multiple([index_1, ": "]);
    if (mod === 0) {
      v = string_combine_multiple([index_1_colon, on_first(b), ", "]);
    } else if (mod === count - 1 || list_index_last_is(bishops, index)) {
      v = string_combine_multiple([index_1_colon, b, ", ", last_after]);
    } else {
      v = string_combine_multiple([index_1_colon, b, ", "]);
    }
    return v;
  });
  return ps;
}
