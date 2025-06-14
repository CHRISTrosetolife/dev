import { app_pray_generic_initialize } from "./app_pray_generic_initialize.mjs";
import { prayers } from "./prayers.mjs";
export async function app_pray() {
  let ps = prayers();
  await app_pray_generic_initialize(app_pray, ps);
}
