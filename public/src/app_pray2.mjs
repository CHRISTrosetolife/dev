import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
import { list_map } from "./list_map.mjs";
export async function app_pray2() {
  let bishops = catholic_bishops();
  list_map(bishops, function (b) {
    let v = string_combine_multiple([""]);
    return v;
  });
  await app_pray_generic(ps);
}
