import { app_pray_generic_initialize } from "./app_pray_generic_initialize.mjs";
import { catholic_bishops_prayers } from "./catholic_bishops_prayers.mjs";
import { catholic_bishops_not } from "./catholic_bishops_not.mjs";
export async function app_pray_catholic_bishops_not() {
  let names = catholic_bishops_not();
  let ps = catholic_bishops_prayers(names);
  await app_pray_generic_initialize(app_pray_catholic_bishops_not, ps);
}
