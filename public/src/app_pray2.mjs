import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
export async function app_pray2() {
  let names = catholic_bishops();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic(app_pray2, ps);
}
