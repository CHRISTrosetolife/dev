import { app_pray_catholic_bishops } from "./app_pray_catholic_bishops.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { catholic_bishops_not } from "./catholic_bishops_not.mjs";
export async function app_pray_catholic_bishops_not() {
  let names = catholic_bishops_not();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic(app_pray_catholic_bishops, ps);
}
