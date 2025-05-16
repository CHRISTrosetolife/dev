import { catholic_bishops } from "./catholic_bishops.mjs";
import { app_pray_generic } from "./app_pray_generic.mjs";
export async function app_pray2() {
  let bishops = catholic_bishops();
  await app_pray_generic(ps);
}
