import { app_pray2 } from "./app_pray2.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { catholic_bishops } from "./catholic_bishops.mjs";
export async function app_pray_catholic_bishops() {
  let names = catholic_bishops();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic(app_pray_catholic_