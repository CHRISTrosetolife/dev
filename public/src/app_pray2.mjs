import { list_index_last_is } from "./list_index_last_is.mjs";
import { mod } from "./mod.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
export async function app_pray2() {
  let bishops = catholic_bishops();
  let on_first = prayers_sabbw;
  let ps = list_map_index(bishops, function (b, index) {
    let count = 10;
    let mod = index % count;
    let v;
    if (mod === 0) {
      v = string_combine_multiple([index + 1, ": ", on_first(b), ", "]);
    } else if (mod === count - 1 || list_index_last_is(bishops, index)) {
      v = string_combine_multiple([
        index + 1,
        ": ",
        b,
        ", ",
        " and their families, friends, fans and the same for any successors and offspring; Lead them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, race, and men and women regarding marriage and ministry;",
      ]);
    } else {
      v = string_combine_multiple([index + 1, ": ", b, ", "]);
    }
    return v;
  });
  await app_pray_generic(app_pray2, ps);
}
