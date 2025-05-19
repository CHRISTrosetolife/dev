import { list_map_index } from "./list_map_index.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
export async function app_pray2() {
  let bishops = catholic_bishops();
  let ps = list_map_index(bishops, function (b, index) {
    let v = string_combine_multiple([
      index + 1,
      ": Save and bless ",
      b,
      " and his family, friends, fans and the same for any successors and descendants; Lead him and them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, race, and men and women regarding marriage and ministry;",
    ]);
    return v;
  });
  await app_pray_generic(app_pray2, ps);
}
