import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { prayers_list_generic } from "./prayers_list_generic.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
export function catholic_bishops_prayers() {
  let bishops = catholic_bishops();
  let on_first = prayers_sabbw;
  function on_last(item) {
    let v2 =
      "and their families, friends, fans and the same for any successors and offspring; Lead them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, race, and men and women regarding marriage and ministry;";
    let v3 = string_combine_multiple([v2]);
    return v3;
  }
  let v = prayers_list_generic(bishops, on_first, on_last);
  return v;
}
