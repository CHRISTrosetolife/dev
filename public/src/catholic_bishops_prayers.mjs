import { prayers_list_generic } from "./prayers_list_generic.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
export function catholic_bishops_prayers() {
  let bishops = catholic_bishops();
  let on_first = prayers_sabbw;
  let last_after =
    "and their families, friends, fans and the same for any successors and offspring; Lead them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, race, and men and women regarding marriage and ministry;";
  let v = prayers_list_generic(bishops, on_first, last_after);
  return v;
}
