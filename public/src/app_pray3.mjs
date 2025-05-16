import { app_pray_generic } from "./app_pray_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
export async function app_pray3() {
  let bishops = catholic_bishops();
  let ps = list_map_index(bishops, function (b, index) {
    let v = string_combine_multiple([
      index + 1,
      ": Save and bless ",
      b,
      " and his family, friends, and fans; Lead him and them to always love and obey God perfectly, including speaking truth in love about unity, head coverings, homosexuality, transgender, and men and women regarding marriage and ministry;",
    ]);
    return v;
  });
  await app_pray_generic(ps);
}
