import { app_pray_generic } from "./app_pray_generic.mjs";
import { prayers } from "./prayers.mjs";
export async function app_pray2() {
  let ps = prayers();
  await app_pray_generic(ps);
}
